const stateDefault = {
    arrRoom: [],
    detailRoom: {}
}


export const RoomReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_ROOM': {
            state.arrRoom = action.arrRoom;
            return { ...state }
        }
        case 'GET_LIST_ROOM_BY_ID': {
            state.detailRoom = action.detailRoom;
            return { ...state }
        }


        default: return state;
    }
}