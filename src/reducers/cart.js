
const IState = {
    cart: []
}
// eslint-disable-next-line
export default function api(state = IState, action) {
    switch (action.type) {
        case 'EDIT_CART':
            return { ...state, cart: action.payload }
        default:
            return state
    }
}