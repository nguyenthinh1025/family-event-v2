import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetFamilyAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Family/get-all-family');
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_FAMILY",
                arrFamily: result.data.data
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


export const UpdateFamilyAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Family/update-family-member`, id);
            console.log(result.data.data);
            console.log(result);
            const action = GetFamilyAction()
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}




export const AddFamilyAction = (id) => {
    return async (dispatch, getState) => {
        try {
            let result = await http.post(`/Family/inser-family-member`, id);
            // console.log(result.data.data);
            console.log(getState().EventBookerReducer?.arrEventBookerById?.eventBookerId);
            const action = await GetFamilyAction()
            await dispatch(action)
            history.push('/eventbooker')
            // history.push(`/editeventbooker/${getState().EventBookerReducer?.arrEventBookerById?.eventBookerId}`)
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteFamilyAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Family/inser-family-member`, id);
            console.log(result.data.data);
            console.log(result);
            const action = GetFamilyAction()
            dispatch(action)
            history.push('/eventbooker')
        } catch (error) {
            console.log(error);
        }
    }
}
