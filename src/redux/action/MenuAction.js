import { history } from "../../App";
import { http } from "../../services/baseServices"



export const GetListMenuAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Menu/get-all-menu');
            const action = {
                type: "GET_LIT_MENU",
                arrMenu: result.data.data
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
export const GetListMenuByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Menu/get-menu-by-id?id=${id}`);
            const action = {
                type: "GET_LIT_MENU_BYID",
                arrMenuById: result.data.data
            }
            dispatch(action)
            console.log(result.data.data);
        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateMenuAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Menu/update-menu`, value);
            const action = await GetListMenuAction()
            await dispatch(action)
            console.log(result.data.data);
            history.push('/menu')
        } catch (error) {
            console.log(error);
        }
    }
}


export const AddMenuAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Menu/insert-menu`, value);
            const action = await GetListMenuAction()
            await dispatch(action)
            console.log(result.data.data);
            history.push('/menu')
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteMenuAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Menu/remove-menu?menuProductId=${id}`);
            const action = await GetListMenuAction()
            await dispatch(action)
            console.log(result.data.data);

        } catch (error) {
            console.log(error);
        }
    }
}