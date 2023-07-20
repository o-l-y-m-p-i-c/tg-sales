

import styles from './style.module.css'
import { motion } from 'framer-motion';
import ProductItem from '../../components/PruductItem/index';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const ProductListPage = () => {
    const { id } = useParams()

    const [resultArr, setResultArr] = useState({
        result: []
    })


    const [pageHeight, setPageHeight] = useState(0)
    const containerRef = useRef(null)
    const fetchedShop = useSelector(state => state.ApplicationReducer.fetchedShop)



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

        if (fetchedShop && id) {


            const cat = crop(fetchedShop);
            if (cat) {
                setResultArr({
                    ...resultArr, result: cat.Categories, category: cat.categorySlug
                })
            }

            function crop(arr) {
                for (let i = 0; i < arr.Categories.length; i++) {
                    const element = arr.Categories[i];
                    // console.log(element) 
                    // eslint-disable-next-line
                    if (element.categorySlug == id) {
                        return element;
                        // return element
                    }
                    if (element.Categories.length > 0) {

                        let a = crop(element)
                        if (a !== undefined) {
                            if (a)
                                return a
                        }


                    }

                }

            }

            return
        }


        if (fetchedShop) {
            setResultArr({ ...resultArr, result: fetchedShop.Categories, category: null })
            return
        }
        // eslint-disable-next-line 
    }, [fetchedShop])


    // useEffect(() => {
    //     if (cart && cart.length > 0 && resultArr && resultArr.length > 0) {
    //         for (let i = 0; i < cart.length; i++) {
    //             const element = cart[i];
    //             for (let x = 0; x < resultArr.length; x++) {
    //                 const elementX = resultArr[x];
    //                 console.log(element, elementX)
    //             }
    //             if (element.parnetCategory === category && element.productID === id) {
    //                 setCount(element.count)
    //             }
    //         }
    //     }
    // }, [cart, resultArr])

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
                        Product List
                    </h1>
                    <div className={styles.ProductList}>
                        {resultArr.result.length > 0 ? resultArr.result.map((item, index) => <ProductItem key={index} props={{ item, id: index, catName: resultArr.category }} />) : 'No results found'}
                    </div>


                </div>
            </div>

        </motion.div>
    )
}