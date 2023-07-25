
import styles from './style.module.css'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import CartItem from '../../components/CartItem'
import { useSelector, useDispatch } from 'react-redux';
export const CartPage = () => {

    const [pageHeight, setPageHeight] = useState(0)
    const dispatch = useDispatch()

    const [editCart, setEditCart] = useState(false)

    const containerRef = useRef(null)
    const cart = useSelector(state => state.CartReducer.cart)

    const resize = () => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)
    }

    useEffect(() => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)

        // console.log(containerRef.current)

        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [pageHeight])


    useEffect(() => {

        if (cart.length === 0) {
            dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'HIDDEN' })
        }
        // eslint-disable-next-line
    }, [cart])

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
                        {cart.length > 0 && <button onClick={() => setEditCart(!editCart)} className={styles.editButton}>
                            Edit
                        </button>}
                    </div>
                    <div className={`container ${styles.cartList}`}>
                        {cart.map((item, index) => <CartItem props={{ item, editCart }} />)}
                    </div>
                </div>
                <div className={styles.cartCommentWrap}>
                    <div className={`container ${styles.cartComment}`}>
                        <textarea name="" id="" rows={2} placeholder='Add comment...' ></textarea>
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