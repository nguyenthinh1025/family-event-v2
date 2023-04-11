const stateDefault = {
    arrEventBooker: [],
    arrEventBookerById: {}
}


export const EventBookerReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_EVENTBOOKER': {
            state.arrEventBooker = action.arrEventBooker;
            return { ...state }
        }
        case 'GET_LIST_EVENTBOOKER_BYID': {
            state.arrEventBookerById = action.arrEventBookerById;
            return { ...state }
        }

        default: return state;
    }
}