const stateDefault = {
    arrDrink: [],
    detailDrink: {},
}


export const DrinkReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_DRINK': {
            state.arrDrink = action.arrDrink;
            return { ...state }
        }
        case "SEARCH_BY_PRICE": {
            state.arrDrink = action.searchPrice;
            return { ...state }
        }
        case 'SEARCH_BY_NAME_DRINK': {
            state.arrDrink = action.searchNameDrink;
            return { ...state }
        }
        case 'DETAIL_DRINK': {
            state.detailDrink = action.detailDrink;
            return { ...state }
        }
        default: return state;
    }
}