import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetListRoomAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/RoomLocation/get-all-room');
            const action = {
                type: "GET_LIST_ROOM",
                arrRoom: result.data.data
            }
            dispatch(action)
            console.log(result.data.data);
            const action4 = {
                type: "HIDE_LOADING"
            }
            dispatch(action4)
        } catch (error) {
            console.log(error);
        }
    }
}

export const GetListRoomByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/RoomLocation/search-by-id-room?Id=${id}`);
            const action = {
                type: "GET_LIST_ROOM_BY_ID",
                detailRoom: result.data.data
            }
            dispatch(action)
            console.log(result.data.data);
        } catch (error) {
            console.log(error);
        }
    }
}




export const UpdateRoomAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/RoomLocation/update-room`, value);
            const action = GetListRoomAction()
            dispatch(action)
            console.log(result.data.data);
            history.push('/room')
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddRoomAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/RoomLocation/insert-room`, value);
            const action = GetListRoomAction()
            dispatch(action)
            console.log(result.data.data);
            history.push('/room')
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteRoomAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/RoomLocation/delete-room?Id=` + value);
            const action = GetListRoomAction()
            dispatch(action)
            console.log(result.data.data);

        } catch (error) {
            console.log(error);
        }
    }
}