import { history } from "../../App";
import { http } from "../../services/baseServices";




export const GetEventAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Event/get-all');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_EVENT",
                arrEvent: result.data.data
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

export const GetEventByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Event/export?id=${id}`);
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_EVENTID",
                arrEventId: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateEventAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Event/update-event`, id);
            console.log(result.data.data);
            const action = GetEventAction()
            dispatch(action)
            history.push('/event')
        } catch (error) {
            console.log(error);
        }
    }
}



export const GetEventMenuAction = (id) => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get(`/Event/get-menu-by-eventid?eventid=${id}`);
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_EVENTMENU",
                eventMenu: result.data.data
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


export const GetEventEnterAction = (id) => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get(`/Event/get-entertainment-by-eventid?eventid=${id}`);
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_EVENTENTER1",
                eventEnter: result.data.data
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