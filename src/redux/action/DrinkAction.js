import { async } from "@firebase/util";
import { history } from "../../App";
import { http } from "../../services/baseServices"
import { ToastContainer, toast } from 'react-toastify';


export const GetDrinkAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Drink/get-all');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_DRINK",
                arrDrink: result.data.data
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


export const GetDrinkByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Drink/get-by-id-drink?drinkId=${id}`)
            const action = {
                type: "GET_BY_ID",
                arrDrinkById: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddDrinkAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Drink/insert-drink', value)
            const action = GetDrinkAction();
            dispatch(action);
            history.push('/drink');
            toast(`Thêm mới thành công`, {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteDrinkAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Drink/delete-drink?drinkId=${value}`)
            const action = GetDrinkAction();
            dispatch(action);

        } catch (error) {
            console.log(error);
        }
    }
}
export const UpdateDrinkAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Drink/update-drink`, value)
            const action = GetDrinkAction();
            dispatch(action);
            history.push('/drink')
        } catch (error) {
            console.log(error);
        }
    }
}

export const SearchByPrice = (min, max) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Drink/search-by-price-drink?minSearchPrice=${min}&maxSearchPrice=${max}`)
            console.log(result.data.data);
            const action = {
                type: "SEARCH_BY_PRICE",
                searchPrice: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const SearchByNameDrink = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Drink/search-by-name-drink/${name}`);
            const action = {
                type: "SEARCH_BY_NAME_DRINK",
                searchNameDrink: result.data.data
            }
            dispatch(action)
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }
}



export const DetailDrinkAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Drink/get-by-id-drink?drinkId=' + id);
            let action = {
                type: "DETAIL_DRINK",
                detailDrink: result.data.data
            }
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    }
}