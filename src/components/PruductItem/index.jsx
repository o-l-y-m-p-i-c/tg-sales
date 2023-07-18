import styles from './style.module.scss'
// import Carusel from '../Carusel/index';
import { useState } from 'react';

import minus from './../../assets/svg/Minus.svg';
import plus from './../../assets/svg/Plus.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changePage } from '../../actions';

const ProductItem = ({ props }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

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

    const redirect = () => {
        dispatch(changePage(navigate, location, {
            path: 'Product',
            params: `${props.id}`
        }))
    }


    return <>
        <div className={styles.productWrap} >
            {count > 0 && <span className={styles.productCount}>{count}</span>}
            {/* <Carusel props={{
                result: [{}, {}],
                slidesPerView: 1,
            }} /> */}
            <div className={styles.productImgWrap} onClick={redirect}>
                <img className={styles.productImg} src="/assets/img/1.png" alt="" />
            </div>
            <h3 className={styles.productTitle} onClick={redirect}>
                Product Title
            </h3>
            <div className={styles.productPriceWrap}>
                <span className={styles.productPrice}>$999</span>
                <span className={styles.productSalePrice}>$1200</span>
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