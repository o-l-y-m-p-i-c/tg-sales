
export const changePage = (navigate, location, payload) => async (dispatch) => {
    let currentPage = location.pathname.split('/')
    currentPage = currentPage.length >= 1 ? currentPage[1] : 'Categories'

    if (currentPage !== payload.path) {
        navigate(`/${payload.path}/${payload.params ? payload.params : ''}`);
        dispatch({ type: 'NAV_INCR' })
    }

}

export const goBackPage = (navigate) => async (dispatch) => {
    dispatch({ type: 'NAV_DECR' })
    navigate(-1)

}