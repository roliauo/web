import dataService from '../../service/dataService';

const actionTypes = {
    UPDATE_PRODUCT_LIST: 'UPDATE_PRODUCT_LIST',
    UPDATE_PRODUCT_DETAIL_PAGE: 'UPDATE_PRODUCT_DETAIL_PAGE'
}

// actions
const updateProductList = (data) => ({
    type: actionTypes.UPDATE_PRODUCT_LIST,
    list: data.products,
    total: data.total,
    skip: data.skip,
    //limit: data.limit,
})

const updateProductDetailPage = (item) => ({
    type: actionTypes.UPDATE_PRODUCT_DETAIL_PAGE,
    item
})

// operations
export const actionOperations = {
    getProductList: (skip?: number) => (dispatch) => {
        const params = `?limit=30&skip=${skip || 0}`;
        dataService.getProductList(params)
            .then((resData) => {
                dispatch(updateProductList(resData));
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
                dispatch(updateProductList(resData));
            })
    },
    getProductListByCategory: (category: string|number, skip?: number) => (dispatch) => {
        const params = `?limit=30&skip=${skip || 0}`;
        if (category === "all") {
            actionOperations.getProductList();
        } else {
            dataService.getProductListByCategory(category, params)
            .then((resData) => {
                dispatch(updateProductList(resData));
            })
        }

    },
    // getCategories: () => (dispatch) => {
    //     dataService.getCategories()
    //         .then((resDate) => )
    // }
}

// reducer
export interface I_Product {
    list: I_ProductItem[];
    item: I_ProductItem | {};
    total: number;
    skip: number;
    limit: number;
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
    total: 0,
    skip: 0,
    limit: 30,
}
const setProduct = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PRODUCT_LIST:
            return {
                ...state,
                list: action.list,
                total: action.total,
                skip: action.skip,
                //limit: action.limit,
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