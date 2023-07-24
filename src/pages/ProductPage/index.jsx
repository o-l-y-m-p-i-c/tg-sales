import { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'

import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { motion } from 'framer-motion';
import Carusel from '../../components/Carusel';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setPayPrice } from '../../reducers/cart';


export const ProductPage = () => {
    const dispatch = useDispatch()
    const [count, setCount] = useState(0)
    const [productData, setProductData] = useState(null)
    const { id, category } = useParams()
    const fetchedShop = useSelector(state => state.ApplicationReducer.fetchedShop)
    const cart = useSelector(state => state.CartReducer.cart)



    const handleAdd = () => {
        setCount(prev => prev + 1)
        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if (element.parnetCategory === category && Number(element.productID) === Number(id)) {
                flag = true
                element.count = count + 1
            }
            if (!category && Number(element.productID) === Number(id)) {
                flag = true
                element.count = count + 1
            }
            newCart.push(element)
        }
        if (!flag) {
            cart.push({ productData, parnetCategory: category, productID: Number(id), count: count + 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }
        dispatch(setPayPrice(cart))
        dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'VIEW_ORDER' })


        // dispatch(setPayPrice(cart))
    }

    const handleDelete = () => {

        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            // eslint-disable-next-line
            if (element.parnetCategory === category && element.productID == id) {
                flag = true
                element.count = count - 1
            }
            if (!category && (Number(element.productID) === Number(id))) {
                flag = true
                element.count = count - 1
            }
            if (element.count >= 1) {
                newCart.push(element)
            }

        }
        if (!flag) {
            cart.push({ productData, parnetCategory: category, productID: id, count: count - 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }

        if (
            count < 1
        ) {
            return
        }
        setCount(prev => prev - 1)
        dispatch(setPayPrice(cart))
    }

    const [pageHeight, setPageHeight] = useState(0)
    const containerRef = useRef(null)


    const resize = () => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)
    }

    useEffect(() => {
        setPageHeight(prev => containerRef.current.scrollHeight + 100)


        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, [pageHeight, productData])





    useEffect(() => {
        if (fetchedShop && category) {


            const cat = crop(fetchedShop);
            if (cat) {
                setProductData(cat.Categories[id])
            }

            function crop(arr) {
                for (let i = 0; i < arr.Categories.length; i++) {
                    const element = arr.Categories[i];
                    // console.log(element) 
                    // eslint-disable-next-line 
                    if (element.categorySlug == category) {
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
        if (fetchedShop.Categories[id]) {
            setProductData(fetchedShop.Categories[id])
            return
        }
        // eslint-disable-next-line 
    }, [])


    useEffect(() => {
        if (cart && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                const element = cart[i];
                if (element.parnetCategory === category && Number(element.productID) === Number(id)) {
                    setCount(element.count)
                }
                if (!category && (Number(element.productID) === Number(id))) {
                    setCount(element.count)
                }
            }
        }
        // eslint-disable-next-line 
    }, [cart])

    return (
        <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: pageHeight }}
            exit={{ maxHeight: 0 }}
            style={{ overflow: 'hidden' }}
        >
            <div className={styles.container} ref={containerRef}>
                <Carusel props={{ slidesPerView: 1, result: (productData && productData.img && productData.img.length > 0) ? productData.img : ['/assets/img/default.png'] }} />
                <div className={styles.productContent} >


                    <h2>
                        {productData ? productData.title : ''}
                    </h2>
                    <p className={styles.productCost}>
                        ${productData ? productData.price : ''}
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
                            {productData ? productData.description : ''}
                            {/* {productData.description} */}
                            {/* <h4>
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
                        </ul> */}
                        </div>
                    </div>
                </div>
            </div>


        </motion.div>
    )
}