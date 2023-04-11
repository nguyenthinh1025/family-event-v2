import { history } from "../../App";
import { http } from "../../services/baseServices"



export const GetListEventTypeAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/EventType/get-all-event-type');
            const action = {
                type: "GET_LIT_EVENT_TYPE",
                arrEventType: result.data.data
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


export const GetListEventTypeByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/EventType/filter-event-type-by-many-option?id=${id}`);
            const action = {
                type: "GET_LIT_EVENT_TYPE_BYID",
                arrEventTypeByID: result.data.data[0]
            }
            dispatch(action)
            console.log(result.data.data);
        } catch (error) {
            console.log(error);
        }
    }

}


export const UpdateEventTypeAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/EventType/update-event-type`, id);
            const action = GetListEventTypeAction()
            dispatch(action)
            console.log(result.data.data);
            history.push('/eventtype')
        } catch (error) {
            console.log(error);
        }
    }
}



export const AddEventTypeAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/EventType/insert-event-type`, id);
            const action = GetListEventTypeAction()
            dispatch(action)
            console.log(result.data.data);
            history.push('/eventtype')
        } catch (error) {
            console.log(error);
        }
    }
}