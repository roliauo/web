import {I_MenuItem} from '../../views/components/CollapsibleMenu';
import dataService from '../../service/dataService';

// action types
export const actionTypes = {
    UPDATE_SIDEBAR_MENU: 'UPDATE_SIDEBAR_MENU',
}

// actions
const updateSidebarMenu = (menu: I_MenuItem) => ({
    type: actionTypes.UPDATE_SIDEBAR_MENU,
    menu
})


// operations
export const actionOperations = {
    getSidebarMenu: () => (dispatch) => {
        dataService.getSidebarMenu()
            .then((resData) => {
                dispatch(updateSidebarMenu(resData));
            }) 
    },
}

// reducer
const initialState = {
    menu: [],
}
const setSidebar = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SIDEBAR_MENU:
            return {
                ...state,
                menu: action.menu
            }
        default: 
            return state;
    }
}

export default setSidebar;