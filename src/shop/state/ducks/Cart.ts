// action types
export const CART_ADD = 'CART_ADD';
export const CART_CLEAR = 'CART_CLEAR';


// action operations
export const addItem = (item) => ({
    type: CART_ADD,
    item,
})

export const clearCart = () => ({
    type: CART_CLEAR,
})


// reducer
interface I_CartItem {
    id: number,
    name: string,
    number: number,
}

const initialState = {
    cartList: [] as I_CartItem[],
    amont: 0
}

const setCart = (state = initialState, action): typeof initialState => {
    switch(action.type){
        case CART_ADD: 
            return {
                ...state,
                cartList: state.cartList.concat(action.item)
            }
        case CART_CLEAR: 
            return {
                ...state,
                cartList: []
            }
        default:
            return state;
    }
}

export default setCart;