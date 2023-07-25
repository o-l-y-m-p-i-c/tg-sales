
import { MainButton } from '@vkruglikov/react-telegram-web-app';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../../actions';
import { useLocation, useNavigate } from 'react-router-dom';

export const MainButtonContainer = () => {
    const mainButtonType = useSelector(state => state.ApplicationReducer.mainButtonType)
    // const navLength = useSelector(state => state.ApplicationReducer.navLength)
    const cart = useSelector(state => state.CartReducer.cart)
    const payPrice = useSelector(state => state.CartReducer.payPrice)
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()


    // eslint-disable-next-line
    const [mainButtonSettings, setMainButtonSettings] = useState({
        text: "",
        show: false,
        color: '',
        textColor: '',
        callBack: null
    })


    useEffect(() => {
        switch (mainButtonType) {
            case 'VIEW_ORDER': {
                setMainButtonSettings(
                    {
                        text: "View order",
                        show: true,
                        color: '#63C470',
                        textColor: '#FFFFFF',
                        callBack: () => {
                            dispatch(changePage(navigate, location, cart, { path: 'Cart' }))
                            dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'PAY_ORDER' })
                        }
                    }
                )
                break;
            }
            case 'PAY_ORDER': {
                setMainButtonSettings({
                    text: `PAY $${payPrice}`,
                    show: true,
                    color: '#63C470',
                    textColor: '#FFFFFF',
                    callBack: () => {
                        alert(`PAY $${payPrice}`);
                        // dispatch(changePage(navigate, location, { path: 'Cart' }))
                        // dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'PAY_ORDER' })
                    }
                })
                break;
            }
            case 'HIDDEN': {
                setMainButtonSettings({
                    text: "",
                    show: false,
                    color: '',
                    textColor: '',
                    callBack: null
                })
                break
            }

            default: setMainButtonSettings({
                text: "",
                show: false,
                color: '',
                textColor: '',
                callBack: null
            })
        }
        // eslint-disable-next-line
    }, [mainButtonType, payPrice])


    // useEffect(() => {
    //     if ((location.pathname === '/Cart' || location.pathname === '/Cart/') && cart.length > 0) {
    //         dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'PAY_ORDER' })
    //     } else if (cart.length > 0) {
    //         dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'VIEW_ORDER' })
    //     } else {
    //         // if (mainButtonType !== 'HIDDEN') {
    //         dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'HIDDEN' })
    //         // window.Telegram.WebApp
    //         // }

    //     }



    //     console.log(mainButtonSettings)

    //     // eslint-disable-next-line
    // }, [navLength, cart])


    return (
        <>
            {/* {mainButtonSettings.show && <button onClick={mainButtonSettings.callBack} style={{ color: mainButtonSettings.textColor, background: mainButtonSettings.color, borderRadius: 0 }}>{mainButtonSettings.text}</button>} */}
            {mainButtonSettings.show && <MainButton text={mainButtonSettings.text} onClick={mainButtonSettings.callBack} textColor={mainButtonSettings.textColor} color={mainButtonSettings.color} />}

        </>

    )
}
