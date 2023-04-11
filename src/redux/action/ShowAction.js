import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetShowAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/ShowService/get-all-show-service')
            const action = {
                type: "GET_LIST_SHOW",
                arrShow: result.data.data
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


export const UpdateShowAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/ShowService/update-show', value);
            const action = GetShowAction()
            dispatch(action)
            history.push('/show')
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteShowAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete('/ShowService/delete-show?id=' + value);
            const action = GetShowAction()
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const SearchByNameShow = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/ShowService/search-by-name-show?name=${name}`)
            console.log(result.data.data);
            const action = {
                type: "SEARCH_BY_NAME_SHOW",
                searchByNameShow: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddShowAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/ShowService/insert-show`, value)
            console.log(result.data.data);
            history.push('/show')
        } catch (error) {
            console.log(error);
        }
    }
}


export const DetailShowAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get('/ShowService/get-by-id-show?id=' + id);
            const action = {
                type: "DETAIL_SHOW",
                detailShow: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}