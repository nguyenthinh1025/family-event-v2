


const stateDefault = {
    arrEntertainmentProduct: [],
    arrEntertainmentProductById: [],

}


export const EntertainmentProductReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_ENTERTAINMENTPRODUCT': {
            state.arrEntertainmentProduct = action.arrEntertainmentProduct;
            return { ...state }
        }
        case 'GET_LIST_ENTERTAINMENTPRODUCT_ID': {
            state.arrEntertainmentProductById = action.arrEntertainmentProductById;
            return { ...state }
        }

        default: return state;
    }
}