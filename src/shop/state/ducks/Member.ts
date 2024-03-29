import authService from "@shop/service/authService";

interface I_User {
    "id": number;
    "username": string;
    "email": string;
    "firstName": string;
    "lastName": string;
    "gender": string;
    "image": string;
    "token": string;
}

interface I_FacebookUser {
    accessToken: string;
    data_access_expiration_time: number;
    email: string;
    expiresIn: number;
    graphDomain: string;
    id: string;
    name: string;
    picture: any;
    signedRequest: string;
    userID: string;
}

const actionTypes = {
    SET_USER: 'SET_USER',
    LOGOUT: 'LOGOUT'
}

// actions
const _setUser = (user) => ({
    type: actionTypes.SET_USER,
    user,
})

const _logout = () => ({
    type: actionTypes.LOGOUT
})

// operations
export const actionOperations = {
    login: (username: string, password: string, callback?) => (dispatch) => {
        authService.login({username, password})
            .then((resData) => {
                dispatch(_setUser(resData));
            })
            .then(() => {
                if (callback) callback();
            })
            .catch((err) => {
                console.log("error: " + err);
            })
    },
    facebookLogin: (user: I_FacebookUser) => (dispatch) => {
        dispatch(_setUser(user));
    },
    logout: (id) => (dispatch) => {
        dispatch(_logout());
        // authService.logout({id})
        //     .then(() => {
        //         dispatch(_logout());
        //     })
    }
}



interface I_State {
    user: I_User;
}

const initialState = {
    user: {},
}

const setMember = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                user: {}
            }
        default:
            return state;
    }
}

export default setMember;