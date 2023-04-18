const stateDefault = {
    arrDecor: [],
    getDecorByID: {},
    getDecorProuctByID: []
}


export const DecorReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_DECOR': {
            state.arrDecor = action.arrDecor;
            return { ...state }
        }
        case 'SEARCH_DECOR_BY_NAME': {
            state.arrDecor = action.searchDecorByName;
            return { ...state }
        }
        case 'SEARCH_DECOR_BY_ID': {
            state.getDecorByID = action.getDecorByID;
            return { ...state }
        }
        case 'SEARCH_DECOR_PRODUCT_BYID': {
            state.getDecorProuctByID = action.getDecorProuctByID;
            return { ...state }
        }
        default: return state;
    }
}