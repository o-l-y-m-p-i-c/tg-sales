import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { changePage } from '../../actions';
import { useDispatch } from 'react-redux';

const CategorieItem = ({ props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()

    const redirect2 = () => {
        console.log(props.item.haveChilds)
        if (props.item.haveChilds === false) {
            dispatch(changePage(navigate, location, { path: 'ProductList', params: props.item.categorySlug }))
        } else {
            dispatch(changePage(navigate, location, { path: 'Categories', params: props.item.categorySlug }))
        }

    }


    return <>
        <div className={styles.productWrap} >
            <div className={styles.productImgWrap} onClick={redirect2}>
                <img className={styles.productImg} src="/assets/img/1.png" alt="" />
            </div>
            <h3 className={styles.productTitle} onClick={redirect2}>
                {props.item.categorySlug}
            </h3>
        </div>

    </>
}

export default CategorieItem