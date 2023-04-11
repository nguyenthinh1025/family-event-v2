const stateDefault = {
    arrEntertainment: [],
    arrEntertainmentById: [],

}


export const EntertainmentReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_ENTERTAINMENT': {
            state.arrEntertainment = action.arrEntertainment;
            return { ...state }
        }
        case 'GET_LIST_ENTERTAINMENT_ID': {
            state.arrEntertainmentById = action.arrEntertainmentById;
            return { ...state }
        }

        default: return state;
    }
}