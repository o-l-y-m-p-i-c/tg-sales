import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { changePage, goBackPage } from '../../actions';
import { useEffect, useState } from 'react';



export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const navLength = useSelector(state => state.ApplicationReducer.navLength)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.CartReducer.cart)
    const fetchedShop = useSelector(state => state.ApplicationReducer.fetchedShop)
    const [isBrowser, setIsBrowser] = useState(false)

    const handleGoForward = (e) => {
        const path = e.currentTarget.getAttribute('to').toString()
        dispatch(changePage(navigate, location, cart, { path }))
    }

    const handleGoBack = () => {
        dispatch(goBackPage(navigate, location, cart))
    }

    useEffect(() => {
        if (navigator.userAgent.includes("Mozilla")) {
            setIsBrowser(true)
        }
        //   eslint-disable-next-line
    }, [])

    return (
        <>
            <header style={{
                display: 'none'
            }}>
                <ul>

                    {fetchedShop && fetchedShop.haveChilds ?
                        <li style={{ color: 'var(--text-color)' }} to="Categories" onClick={handleGoForward}>Categories</li>
                        :
                        <li style={{ color: 'var(--text-color)' }} to="ProductList" onClick={handleGoForward}>ProductListPage</li>
                    }


                    <li style={{ color: 'var(--text-color)' }} to="Cart" onClick={handleGoForward}>Cart</li>
                </ul>
            </header>
            {/* {navLength > 0 && isBrowser && <button style={{ borderRadius: 0 }} onClick={handleGoBack}>back</button>} */}
            {navLength > 0 && <BackButton onClick={handleGoBack} />}
        </>
    )

}