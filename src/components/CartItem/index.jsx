
import styles from './style.module.css'
import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { useState } from 'react';
import { useRef } from 'react';

const CartItem = () => {

    const [count, setCount] = useState(1)
    const cartItem = useRef(null)


    const handleAdd = () => {
        setCount(prev => prev + 1)
    }

    const handleDelete = () => {
        if (
            count < 2
        ) {
            cartItem.current.remove()
            // return
        }
        setCount(prev => prev - 1)
    }

    return (
        <div className={`${styles.cartItem}`} ref={cartItem}>
            <div className={styles.cartItemImgWrap}>
                <img src="" width={70} height={70} className={styles.cartItemImg} alt="" />
            </div>
            <div className="">
                Middle
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