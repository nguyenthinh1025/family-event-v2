const stateDefault = {
    arrDecor: [],
    getDecorByID: {}
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
        default: return state;
    }
}