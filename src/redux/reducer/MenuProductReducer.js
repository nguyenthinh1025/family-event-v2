

const stateDefault = {
    arrMenuProduct: []
}


export const MenuProductReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIT_MENU_PRODUCT': {
            state.arrMenuProduct = action.arrMenuProduct;
            return { ...state }
        }

        default: return state;
    }
}