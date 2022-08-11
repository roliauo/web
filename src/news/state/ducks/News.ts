import dataService from '../../service/dataService';

const actionTypes = {
    UPDATE_NEWS_LIST: 'UPDATE_NEWS_LIST',
    //UPDATE_PRODUCT_DETAIL_PAGE: 'UPDATE_PRODUCT_DETAIL_PAGE'
}



// actions
const updateNewsList = (category, data) => ({
    type: actionTypes.UPDATE_NEWS_LIST,
    category,
    list: data.articles,
    totalResults: data.totalResults,
})


// operations
export const actionOperations = {
    getNews: () => (dispatch) => {
        dataService.getNews()
            .then((resData) => {
                dispatch(updateNewsList('/', resData));
            })
    },
    getNewsByCountry: (country: string) => (dispatch) => {
        dataService.getNewsByCountry(country)
            .then((resData) => {
                dispatch(updateNewsList(country, resData));
            })
    },
    getNewsByCategory: (category: string) => (dispatch) => {
        dataService.getNewsByCategory(category)
            .then((resData) => {
                dispatch(updateNewsList(category, resData));
            })
    },
    searchNews: (search: string) => (dispatch) => {
        dataService.searchNews(search)
            .then((resData) => {
                dispatch(updateNewsList(search, resData));
            })
    },
}

// reducer
export interface I_NewsAPI {
    articles: [];
    totalResults: number;
    status: "ok" | "error";
}

export interface I_NewsInfo {
    source: {
        id: string | number | null,
        name: string;
    },
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface I_NewsState {
    category: string;
    list: I_NewsInfo[];
    totalResults: number;
}
const initialState: I_NewsState = {
    category: '',
    list: [],
    totalResults: 0
}
const setNews = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_NEWS_LIST:
            return {
                ...state,
                category: action.category,
                list: action.list,
                totalResults: action.totalResults,

            }
        default:
            return state;
    }
}

export default setNews;