
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CartItem from '../../components/CartItem'
export const CartPage = () => {

    const [pageHeight, setPageHeight] = useState(0)
    const containerRef = useRef(null)


    const resize = () => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)
    }

    useEffect(() => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)

        // console.log(containerRef.current)

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [pageHeight])

    return (
        <motion.div
            initial={{ maxHeight: 0, minHeight: '0%' }}
            animate={{ maxHeight: pageHeight, minHeight: '100%' }}
            exit={{ maxHeight: 0, minHeight: '0%' }}
            style={{ overflow: 'hidden' }}
        >
            <div className={`${styles.page}`}
                ref={containerRef}
            >
                <div className={styles.cartWrap}>


                    <div className={`container ${styles.pageHeader}`}>
                        <h2>
                            Your order
                        </h2>
                        <button className={styles.editButton}>
                            Edit
                        </button>
                    </div>
                    <div className={`container ${styles.cartList}`}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />

                    </div>
                </div>
                <div className={styles.cartCommentWrap}>
                    <div className={`container ${styles.cartComment}`}>
                        <textarea name="" id="" placeholder='Add comment...' ></textarea>
                    </div>
                </div>
                <div className={`container`}>
                    <p>
                        Any special requests, detatails, final wishes etc.
                    </p>
                </div>


            </div>
        </motion.div>
    )
}