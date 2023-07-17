

import styles from './style.module.css'
import { motion } from 'framer-motion';
import ProductItem from '../../components/PruductItem/index';
import { useState, useEffect, useRef } from 'react';


export const ProductListPage = () => {


    const [resultArr, setResultArr] = useState({
        result: []
    })


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



    useEffect(() => {
        setResultArr({
            ...resultArr, result: [
                <ProductItem props={{ id: 0 }} />,
                <ProductItem props={{ id: 1 }} />,
                <ProductItem props={{ id: 2 }} />,
                <ProductItem props={{ id: 3 }} />
            ]
        })
        // eslint-disable-next-line 
    }, [])

    return (
        <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: pageHeight }}
            exit={{ maxHeight: 0 }}
            style={{ overflow: 'hidden' }}
        >
            <div className={styles.container} ref={containerRef}>
                <div className={`${styles.page}`}>
                    <h1>
                        ProductListPage
                    </h1>
                    <div className={styles.ProductList}>
                        {resultArr.result.map(item => item)}
                        {/* <ProductItem /> */}
                    </div>


                </div>
            </div>

        </motion.div>
    )
}