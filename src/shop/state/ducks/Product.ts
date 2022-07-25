import dataService from '../../service/dataService';

// action types
export const actionTypes = {
    UPDATE_PRODUCT_LIST: 'UPDATE_PRODUCT_LIST',
    UPDATE_PRODUCT_DETAIL_PAGE: 'UPDATE_PRODUCT_DETAIL_PAGE'
}

// actions
const updateProductList = (list) => ({
    type: actionTypes.UPDATE_PRODUCT_LIST,
    list
})

const updateProductDetailPage = (item) => ({
    type: actionTypes.UPDATE_PRODUCT_DETAIL_PAGE,
    item
})

// operations
export const actionOperations = {
    getProductList: () => (dispatch) => {
        dataService.getProductList()
            .then((resData) => {
                dispatch(updateProductList(resData.products));
            })
    },
    getProductById: (id: number) => (dispatch) => {
        dataService.getProductById(id)
            .then((resData) => {
                dispatch(updateProductDetailPage(resData));
            })
    },
    searchProduct: (search: string) => (dispatch) => {
        dataService.searchProduct(search)
            .then((resData) => {
                dispatch(updateProductList(resData.products));
            })
    },
}

// reducer
export interface I_Product {
    list: I_ProductItem[];
    item: I_ProductItem | {};
}

export interface I_ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }

const initialState: I_Product = {
    list: [],
    item: {},
}
const setProduct = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PRODUCT_LIST:
            return {
                ...state,
                list: action.list
            }
        case actionTypes.UPDATE_PRODUCT_DETAIL_PAGE:
            return {
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

export default setProduct;