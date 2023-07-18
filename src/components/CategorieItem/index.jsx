import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { changePage } from '../../actions';
import { useDispatch } from 'react-redux';

const CategorieItem = ({ props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    const redirect = () => {
        dispatch(changePage(navigate, location, { path: 'ProductList' }))
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