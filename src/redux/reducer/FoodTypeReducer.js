const stateDefault = {
    arrFoodType: [],
    detailFoodType: {}
}


export const FoodTypeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_FOODTYPE': {
            state.arrFoodType = action.arrFoodType;
            return { ...state }
        }
        case 'GET_LIST_FOODTYPE_NAME': {
            state.arrFoodType = action.arrFoodTypeName;
            return { ...state }
        }
        case 'GET_LIST_FOODTYPE_BYID': {
            state.detailFoodType = action.detailFoodType;
            return { ...state }
        }


        default: return state;
    }
}