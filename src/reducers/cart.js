
const IState = {
    cart: [],
    payPrice: 0,
}
// eslint-disable-next-line
export default function api(state = IState, action) {
    switch (action.type) {
        case 'EDIT_CART':
            return { ...state, cart: action.payload }
        case 'SET_PRICE':
            return { ...state, payPrice: action.payload }
        default:
            return state
    }
}


export function setPayPrice(cart) {
    let price = Number(0)

    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        price += Number(element.productData.price * element.count)
    }
    // IState.cart.forEach(item => {
    //     price += Number(item.productData.price * item.count)
    //     console.log("cart", IState.cart, item, item.productData.price * item.count, price)
    // })
    return { type: 'SET_PRICE', payload: price }
}