const stateDefault = {
    arrEvent: [],
    arrEventId: {},
    eventMenu: [],
    eventEnter: [],
}


export const ListEventReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_EVENT': {
            state.arrEvent = action.arrEvent;
            return { ...state }
        }
        case 'GET_LIST_EVENTID': {
            state.arrEventId = action.arrEventId;
            return { ...state }
        }
        case 'GET_LIST_EVENTMENU': {
            state.eventMenu = action.eventMenu;
            return { ...state }
        }
        case 'GET_LIST_EVENTENTER1': {
            state.eventEnter = action.eventEnter;
            return { ...state }
        }
        default: return state;
    }
}