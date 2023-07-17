import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { motion } from 'framer-motion';
import Carusel from '../../components/Carusel';


export const ProductPage = () => {

    const [count, setCount] = useState(0)


    const handleAdd = () => {
        setCount(prev => prev + 1)
    }

    const handleDelete = () => {
        if (
            count < 1
        ) {
            return
        }
        setCount(prev => prev - 1)
    }

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
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: pageHeight }}
            exit={{ maxHeight: 0 }}
            style={{ overflow: 'hidden' }}
        >
            <div className={styles.container} ref={containerRef}>
                <Carusel props={{ slidesPerView: 1, result: [{}, {}] }} />

                <h2>
                    Product
                </h2>
                <p className={styles.productCost}>
                    $00.00
                </p>
                <div className={styles.productBtnInner}>
                    <button className={styles.productBtnMinus} onClick={handleDelete}>
                        <img width={14} src={minus} alt="" />
                    </button>
                    <span className={styles.productPrice}>
                        {count}
                    </span>
                    <button className={`${styles.productBtnPlus} ${count > 0 ? styles.Checked : ''}`} onClick={handleAdd}>
                        {count === 0 ? "Add" : <img width={14} src={plus} alt="" />}
                    </button>
                </div>
                <div className={styles.productDescription}>
                    <h3>
                        About the Product
                    </h3>

                    <div className="">
                        <h4>
                            Features
                        </h4>
                        <ul>


                            <li>
                                Durable <bold>Flexible</bold> case that grips around the edges of your phone <br />
                            </li>
                            <li>
                                Durable <bold>Flexible</bold> case that grips around the edges of your phone <br />
                            </li>
                            <li>
                                Durable <bold>Flexible</bold> case that grips around the edges of your phone <br />
                            </li>
                            <li>
                                Durable <bold>Flexible</bold> case that grips around the edges of your phone <br />
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


        </motion.div>
    )
}