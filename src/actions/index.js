
export const changePage = (navigate, location, payload) => async (dispatch) => {
    let currentPage = location.pathname.split('/')
    // eslint-disable-next-line
    currentPage = currentPage.length >= 1 ? currentPage[1] : 'Categories'

    if (payload.path) {
        console.log(payload.params)
        navigate(`/${payload.path}/${payload.params ? payload.params : ''}`);
        dispatch({ type: 'NAV_INCR' })


    }

}

export const goBackPage = (navigate, location) => async (dispatch) => {
    await dispatch({ type: 'NAV_DECR' })
    await navigate(-1)


}