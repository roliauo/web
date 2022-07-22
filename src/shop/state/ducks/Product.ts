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
const initialState = {
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