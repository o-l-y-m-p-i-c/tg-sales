import styles from './style.module.scss'
// import Carusel from '../Carusel/index';
import { useState, useEffect } from 'react';

import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../actions';
import { setPayPrice } from '../../reducers/cart';

const ProductItem = ({ props }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const cart = useSelector(state => state.CartReducer.cart)

    const [count, setCount] = useState(0)


    const handleAdd = () => {
        setCount(prev => prev + 1)

        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if (element.parnetCategory === props.catName && (Number(element.productID) === Number(props.id))) {
                flag = true
                element.count = count + 1
            }
            if (!props.catName && Number(element.productID) === Number(props.id)) {
                flag = true
                element.count = count + 1
            }
            newCart.push(element)
        }
        if (!flag) {
            cart.push({ productData: props.item, parnetCategory: props.catName, productID: Number(props.id), count: count + 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }
        dispatch(setPayPrice(cart))
        dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'VIEW_ORDER' })

    }

    const handleDelete = () => {

        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if (element.parnetCategory === props.catName && (Number(element.productID) === Number(props.id))) {
                flag = true
                element.count = count - 1
            }
            if (!props.catName && (Number(element.productID) === Number(props.id))) {
                flag = true
                element.count = count - 1
            }
            if (element.count >= 1) {
                newCart.push(element)
            }

        }
        if (!flag) {
            cart.push({ productData: props.item, parnetCategory: props.catName, productID: Number(props.id), count: count - 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }

        if (
            count < 1
        ) {
            return
        }
        dispatch(setPayPrice(cart))
        setCount(prev => prev - 1)
        // dispatch(setPayPrice(cart))
    }

    const redirect = () => {
        dispatch(changePage(navigate, location, cart, {
            path: 'Product',
            params: `${props.id}/${props.catName ? props.catName : ''}`
        }))
    }



    useEffect(() => {
        console.log(props)
        if (cart && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                const element = cart[i];
                // console.log(element.parnetCategory === props.catName)
                // console.log(Number(element.productID) === props.id)
                if (element.parnetCategory === props.catName && (Number(element.productID) === props.id)) {
                    // console.log(element)
                    setCount(element.count)
                }
                if (!element.parnetCategory && (Number(element.productID) === props.id)) {
                    // console.log(element)
                    setCount(element.count)
                }
            }
        }
        // eslint-disable-next-line
    }, [cart])


    return <>
        <div className={styles.productWrap} >
            {count > 0 && <span className={styles.productCount}>{count}</span>}
            {/* <Carusel props={{
                result: [{}, {}],
                slidesPerView: 1,
            }} /> */}
            <div className={styles.productImgWrap} onClick={redirect}>
                <img className={styles.productImg} src={props.item.img && props.item.img.length > 0 ? props.item.img[0] : '/assets/img/default.png'} alt="" />
            </div>
            <h3 className={styles.productTitle} onClick={redirect}>
                {props.item.title}
            </h3>
            {props.catName && <div style={{ textAlign: 'center', margin: '5px 0' }}>
                {props.catName}
            </div>}

            <div className={styles.productPriceWrap}>
                <span className={styles.productPrice}>{props.item.price ? `$${props.item.price}` : ''}</span>
                {/* <span className={styles.productSalePrice}>$1200</span> */}
            </div>
            <div className={styles.productBtnWrap}>
                <div className={styles.productBtnInner}>
                    <button className={styles.productBtnMinus} onClick={handleDelete}>
                        <img width={14} src={minus} alt="" />
                    </button>
                    <button className={`${styles.productBtnPlus} ${count > 0 ? styles.Checked : ''}`} onClick={handleAdd}>
                        {count === 0 ? "Add" : <img width={14} src={plus} alt="" />}
                    </button>
                </div>

            </div>
        </div>

    </>
}

export default ProductItem