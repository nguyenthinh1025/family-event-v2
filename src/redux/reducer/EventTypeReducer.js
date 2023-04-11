const stateDefault = {
    arrEventType: [],
    arrEventTypeByID: {}
}


export const EventTypeReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIT_EVENT_TYPE': {
            state.arrEventType = action.arrEventType;
            return { ...state }
        }

        case 'GET_LIT_EVENT_TYPE_BYID': {
            state.arrEventTypeByID = action.arrEventTypeByID;
            return { ...state }
        }

        default: return state;
    }
}