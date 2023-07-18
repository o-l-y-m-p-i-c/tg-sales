
const IState = {

}
// eslint-disable-next-line
export default function api(state = IState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}