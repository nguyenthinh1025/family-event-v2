const stateDefault = {
    arrProduct: [],
    productID: {}
}


export const ProductReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_PRODUCT': {
            state.arrProduct = action.arrProduct;
            return { ...state }
        }
        case "SEARCH_BY_NAME_PRODUCT": {
            state.arrProduct = action.searchByNameProduct;
            return { ...state }
        }
        case 'GET_LIST_PRODUCT_BY_ID': {
            state.productID = action.productID;
            return { ...state }
        }

        default: return state;
    }
}

