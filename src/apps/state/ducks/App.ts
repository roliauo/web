// actions
const actionTypes = {
    TEST: 'TEST',
}



// reducer
const setApp = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.TEST:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default setApp;