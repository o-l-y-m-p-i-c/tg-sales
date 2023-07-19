import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { changePage, goBackPage } from '../../actions';



export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navLength = useSelector(state => state.ApplicationReducer.navLength)
    const dispatch = useDispatch()

    const handleGoForward = (e) => {
        const path = e.currentTarget.getAttribute('to').toString()
        dispatch(changePage(navigate, location, { path }))
    }

    const handleGoBack = () => {
        dispatch(goBackPage(navigate, location))
    }

    return (
        <>
            <header>
                <ul>
                    <li style={{ color: 'var(--text-color)' }} to="Categories" onClick={handleGoForward}>Categories</li>
                    <li style={{ color: 'var(--text-color)' }} to="ProductList" onClick={handleGoForward}>ProductListPage</li>
                    <li style={{ color: 'var(--text-color)' }} to="Cart" onClick={handleGoForward}>Cart</li>
                </ul>
            </header>
            {navLength > 0 && <button onClick={handleGoBack}>back</button>}
            {navLength > 0 && <BackButton onClick={handleGoBack} />}
        </>
    )

}