
export const changePage = (navigate, location, cart, payload) => async (dispatch) => {
    let currentPage = location.pathname.split('/')
    // eslint-disable-next-line
    currentPage = currentPage.length >= 1 ? currentPage[1] : 'Categories'

    if (payload.path) {
        console.log(payload.params)
        navigate(`/${payload.path}/${payload.params ? payload.params : ''}`);
        dispatch({ type: 'NAV_INCR' })
        if ((location.pathname === '/Cart' || location.pathname === '/Cart/') && cart.length > 0) {
            dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'PAY_ORDER' })
        } else if (cart.length > 0) {
            dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'VIEW_ORDER' })
        } else {
            // if (mainButtonType !== 'HIDDEN') {
            dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'HIDDEN' })
            // window.Telegram.WebApp
            // }

        }

    }

}

export const goBackPage = (navigate, location, cart) => async (dispatch) => {
    await dispatch({ type: 'NAV_DECR' })
    await navigate(-1)
    if ((location.pathname === '/Cart' || location.pathname === '/Cart/') && cart.length > 0) {
        dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'PAY_ORDER' })
    } else if (cart.length > 0) {
        dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'VIEW_ORDER' })
    } else {
        // if (mainButtonType !== 'HIDDEN') {
        dispatch({ type: 'EDIT_MAIN_BUTTON', payload: 'HIDDEN' })
        // window.Telegram.WebApp
        // }

    }


}