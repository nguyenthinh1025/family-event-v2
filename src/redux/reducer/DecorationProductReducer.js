
const stateDefault = {
    arrDecorationProduct: [],
    arrDecorationProductById: {}
}


export const DecorationProductReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_DECORATIONPRODUCT': {
            state.arrDecorationProduct = action.arrDecorationProduct;
            return { ...state }
        }

        case 'GET_LIST_DECORATIONPRODUCT_BYID': {
            state.arrDecorationProductById = action.arrDecorationProductById;
            return { ...state }
        }
        default: return state;
    }
}