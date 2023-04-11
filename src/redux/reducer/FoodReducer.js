const stateDefault = {
    arrFood: [],
    detailFood: {}
}


export const FoodReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_FOOD': {
            state.arrFood = action.arrFood;
            return { ...state }
        }

        case 'SEARCH_LIST_FOOD_NAME': {
            state.arrFood = action.arrSearchFoodName;
            return { ...state }
        }
        case 'SEARCH_LIST_FOOD_PRICE': {
            state.arrFood = action.arrSearchFoodPrice;
            return { ...state }
        }
        case 'SEARCH_LIST_FOOD': {
            state.arrFood = action.arrSearchFood;
            return { ...state }
        }
        case 'DETAIL_FOOD': {
            state.detailFood = action.detailFood;
            return { ...state }
        }
        default: return state;
    }
}