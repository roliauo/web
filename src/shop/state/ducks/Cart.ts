import { STORAGE_KEY } from "@shop/constants"
import cartService from "@shop/service/cartService"
import { I_ProductItem } from "./Product"

// action types
const actionTypes = {
    CART_SET: 'CART_SET',
    CART_ADD: 'CART_ADD',
    CART_CLEAR: 'CART_CLEAR'
}

// actions
const setCartList = (cart: []) => ({
    type: actionTypes.CART_SET,
    cart
})

const addItem = (item) => ({
    type: actionTypes.CART_ADD,
    item,
})

const clearCart = () => ({
    type: actionTypes.CART_CLEAR,
})

// action operations
export const actionOperations = {
    getCart: (userId) => (dispatch) => {

        if (userId !== undefined) {
            cartService.getACart(userId)
                .then((data) => {
                    dispatch(setCartList(data));
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            if (window.localStorage.getItem(STORAGE_KEY.CART) === null) {
                window.localStorage.setItem(STORAGE_KEY.CART, JSON.stringify([]));
            }
            dispatch(setCartList(JSON.parse(window.localStorage.getItem(STORAGE_KEY.CART))));
        }
    },
    addToCart: (item) => (dispatch) => {
        const cart = JSON.parse(localStorage.getItem(STORAGE_KEY.CART)) || [];
        cart.push(item);
        localStorage.setItem(STORAGE_KEY.CART, JSON.stringify(cart));
    },
    getWishList: () => (dispatch) => {
        localStorage.setItem(STORAGE_KEY.WISH_LIST, JSON.stringify([]));

        return JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST));
    },
    addToWishList: (item: I_ProductItem) => (dispatch) => {
        const wishlist = JSON.parse(localStorage.getItem(STORAGE_KEY.WISH_LIST)) || [];
        wishlist.push(item);
        localStorage.setItem(STORAGE_KEY.WISH_LIST, JSON.stringify(wishlist));
    }

}


// reducer
interface I_CartItem {
    id: number,
    name: string,
    number: number,
}

const initialState = {
    cartList: [], //as I_CartItem[],
    amont: 0
}

const setCart = (state = initialState, action): typeof initialState => {
    switch(action.type){
        case actionTypes.CART_SET:
            return {
                ...state,
                cartList: action.cart
            }
        case actionTypes.CART_ADD:
            return {
                ...state,
                cartList: state.cartList.concat(action.item)
            }
        case actionTypes.CART_CLEAR:
            return {
                ...state,
                cartList: []
            }
        default:
            return state;
    }
}

export default setCart;