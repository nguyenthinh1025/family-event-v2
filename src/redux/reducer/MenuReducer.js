const stateDefault = {
    arrMenu: [],
    arrMenuById: {}
}


export const MenuReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIT_MENU': {
            state.arrMenu = action.arrMenu;
            return { ...state }
        }
        case 'GET_LIT_MENU_BYID': {
            state.arrMenuById = action.arrMenuById;
            return { ...state }
        }

        default: return state;
    }
}