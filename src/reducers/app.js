
const IState = {
    navLength: 0
}
// eslint-disable-next-line
export default function (state = IState, action) {
    switch (action.type) {
        case 'NAV_INCR':
            return { ...state, navLength: state.navLength + 1 }
        case 'NAV_DECR':
            return { ...state, navLength: state.navLength - 1 }
        default:
            return state
    }
}

// Action Creators
