import {I_MenuItem} from '../../views/components/CollapsibleMenu';

// action types
export const actionTypes = {
    UPDATE_SIDEBAR_MENU: 'UPDATE_SIDEBAR_MENU',
}


// operations
export const actionOperations = {
    updateSidebarMenu: (menu: I_MenuItem) => ({
        type: actionTypes.UPDATE_SIDEBAR_MENU,
        menu
    }),
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