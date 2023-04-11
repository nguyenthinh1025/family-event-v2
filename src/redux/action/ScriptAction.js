import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetScriptAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Script/get-all-script')
            const action = {
                type: "GET_LIST_SCRIPT",
                arrScript: result.data.data
            }
            console.log(result);
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



export const GetScriptByIDAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Script/search-by-id-script?ID=${id}`)
            const action = {
                type: "GET_LIST_SCRIPT_ID",
                arrScriptID: result.data.data
            }
            console.log(result);
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateScriptAction = (id, value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Script/update-script/${id}`, value)
            const action = GetScriptAction()
            console.log(result);
            dispatch(action)
            history.push('/script')
        } catch (error) {
            console.log(error);
        }
    }
}


