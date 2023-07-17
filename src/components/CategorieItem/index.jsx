import styles from './style.module.scss'
// import Carusel from '../Carusel/index';
// import { useState } from 'react';

// import minus from './../../assets/svg/Minus.svg';
// import plus from './../../assets/svg/Plus.svg';
import { useNavigate } from 'react-router-dom';

const CategorieItem = ({ props }) => {
    const navigation = useNavigate()

    // const [count, setCount] = useState(0)



    const redirect = () => {
        const url = '/ProductList'
        navigation(url)
    }

    return <>
        <div className={styles.productWrap} >
            <div className={styles.productImgWrap} onClick={redirect}>
                <img className={styles.productImg} src="/assets/img/1.png" alt="" />
            </div>
            <h3 className={styles.productTitle} onClick={redirect}>
                Product Title
            </h3>
        </div>

    </>
}

export default CategorieItem