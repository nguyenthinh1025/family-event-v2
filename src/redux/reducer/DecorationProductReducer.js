
const stateDefault = {
    arrDecorationProduct: [],
    arrDecorationProductById: {},
    arrDecorProductByDecorId: {}
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
        case 'GET_LIST_DECORATIONPRODUCT_BYID_DECOR': {
            state.arrDecorProductByDecorId = action.arrDecorProductByDecorId;
            return { ...state }
        }
        default: return state;
    }
}