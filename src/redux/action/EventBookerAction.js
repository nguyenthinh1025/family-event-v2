import { history } from "../../App";
import { http } from "../../services/baseServices";




export const GetEventBookerAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/EventBooker/get-all');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_EVENTBOOKER",
                arrEventBooker: result.data.data
            }
            dispatch(action)
            const action4 = {
                type: "HIDE_LOADING"
            }
            dispatch(action4)
        } catch (error) {
            console.log(error);
        }
    }
}




export const GetEventBookerByIDAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/EventBooker/get-list-by-id-Eventbooker?Id=${id}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_EVENTBOOKER_BYID",
                arrEventBookerById: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}



export const UpdateEventBookerAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/EventBooker/update-event-booker`, value);
            console.log(result.data.data);
            console.log(result);
            const action = GetEventBookerAction()
            dispatch(action)
            history.push('/eventbooker')
        } catch (error) {
            console.log(error);
        }
    }
}

