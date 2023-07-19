
import styles from './style.module.css'
import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = ({ props }) => {

    const [count, setCount] = useState(0)
    const cartItem = useRef(null)
    const cart = useSelector(state => state.CartReducer.cart)
    const dispatch = useDispatch()

    const handleAdd = () => {
        setCount(prev => prev + 1)
        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if (element.parnetCategory === props.item.parnetCategory && (Number(element.productID) === Number(props.item.productID))) {
                flag = true
                element.count = count + 1
            }
            newCart.push(element)
        }
        if (!flag) {
            cart.push({ productData: props.item, parnetCategory: props.item.parnetCategory, productID: Number(props.item.productID), count: count + 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }

    }

    const handleDelete = () => {

        let flag = false
        const newCart = []
        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            if (element.parnetCategory === props.item.parnetCategory && (Number(element.productID) === Number(props.item.productID))) {
                flag = true
                element.count = count - 1
            }
            if (element.count >= 1) {
                newCart.push(element)
            }

        }
        if (!flag) {
            cart.push({ productData: props.item, parnetCategory: props.item.parnetCategory, productID: Number(props.item.productID), count: count - 1 })
            dispatch({ type: 'EDIT_CART', payload: cart })
        } else {
            dispatch({ type: 'EDIT_CART', payload: newCart })
        }

        if (
            count < 1
        ) {
            // cartItem.current.remove()
            return
        }
        setCount(prev => prev - 1)
    }

    useEffect(() => {
        // setCount
    }, [cart])

    useEffect(() => {
        console.log(props)
        if (cart && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                const element = cart[i];
                console.log(element.parnetCategory === props.item.parnetCategory)
                console.log(Number(element.productID) === props.item.productID)
                if (element.parnetCategory === props.item.parnetCategory && (Number(element.productID) === props.item.productID)) {
                    // console.log(element)
                    setCount(element.count)
                }
            }
        }
        // eslint-disable-next-line
    }, [cart])

    return (
        <div className={`${styles.cartItem}`} ref={cartItem}>
            <div className={styles.cartItemImgWrap}>
                <img width={70} height={70} className={styles.cartItemImg} src="/assets/img/1.png" alt="" />
            </div>
            <div className="">
                {props.item.productData.title} - ({props.item.parnetCategory}) {count}
                <div className={styles.productBtnInner}>
                    <button className={styles.productBtnMinus} onClick={handleDelete}>
                        <img width={14} src={minus} alt="" />
                    </button>
                    <button className={`${styles.productBtnPlus} ${count > 0 ? styles.Checked : ''}`} onClick={handleAdd}>
                        {count === 0 ? "Add" : <img width={14} src={plus} alt="" />}
                    </button>
                </div>
            </div>
            <div className="">
                Cost
            </div>
        </div>
    )
}

export default CartItem