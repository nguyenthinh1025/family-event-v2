import { async } from "@firebase/util";
import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetDecorAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Decoration/get-all-decoration');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_DECOR",
                arrDecor: result.data.data
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

export const SearchDecorByNameAction = (name, minPrice, MaxPrice) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Decoration/filter-decoration?name=${name}&minPrice=${minPrice}&maxPrice=${MaxPrice}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "SEARCH_DECOR_BY_NAME",
                searchDecorByName: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const GetDecorByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Decoration/search-by-id-decoration?decorationId=${id}`);

            const action = {
                type: "SEARCH_DECOR_BY_ID",
                getDecorByID: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteDecorAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Decoration/delete-decoration?decorationId=${id}`);
            console.log(result.data.data);
            const action = GetDecorAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateDecorAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/Decoration/update-decoration', value);
            console.log(result.data.data);
            const action = GetDecorAction();
            dispatch(action)
            history.push('/decor')
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddDecorAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Decoration/insert-decoration', value);
            console.log(result.data.data);
            const action = GetDecorAction();
            dispatch(action)
            history.push('/decor')
        } catch (error) {

        }
    }
}


