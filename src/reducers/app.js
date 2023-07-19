
const IState = {
    navLength: 0,
    loading: true,
    mainButtonType: 'HIDDEN',
    fetchedShop: null
}
// eslint-disable-next-line
export default function (state = IState, action) {
    switch (action.type) {
        case 'NAV_INCR':
            return { ...state, navLength: state.navLength + 1 }
        case 'NAV_DECR':
            return { ...state, navLength: state.navLength - 1 }
        case 'EDIT_MAIN_BUTTON':
            return { ...state, mainButtonType: action.payload }
        case 'INIT_SHOP':
            return { ...state, fetchedShop: action.payload }
        default:
            return state
    }
}

// Action Creators
