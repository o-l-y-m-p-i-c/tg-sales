import styles from './style.module.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import { changePage } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';

const CategorieItem = ({ props }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch()
    const cart = useSelector(state => state.CartReducer.cart)

    const redirect2 = () => {
        if (props.item.haveChilds === false) {
            dispatch(changePage(navigate, location, cart, { path: 'ProductList', params: props.item.categorySlug }))
        } else {
            dispatch(changePage(navigate, location, cart, { path: 'Categories', params: props.item.categorySlug }))
        }
    }


    return <>
        <div className={styles.productWrap} >
            <div className={styles.productImgWrap} onClick={redirect2}>
                <img className={styles.productImg} src={props.item.img ? props.item.img : '/assets/img/default.png'} alt="" />
            </div>
            <h3 className={styles.productTitle} onClick={redirect2}>
                {props.item.categorySlug}
            </h3>
        </div>

    </>
}

export default CategorieItem