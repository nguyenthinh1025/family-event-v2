import { history } from "../../App";
import { http } from "../../services/baseServices";

export const GetFoodTypeAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/FoodType/get-all');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_FOODTYPE",
                arrFoodType: result.data.data
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


export const GetFoodTypeByIDAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/FoodType/get-by-food-type-id?foodTypeId=${id}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_FOODTYPE_BYID",
                detailFoodType: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteFoodTypeAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/FoodType/delete-FoodType/${id}?id=${id}`);
            const action = GetFoodTypeAction()
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const SearchFoodTypeAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/FoodType/search-by-name-FoodType?name=${name}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_FOODTYPE_NAME",
                arrFoodTypeName: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateFoodTypeAction = (id, value) => {
    return async (dispatch) => {
        try {
            let result = await http.put("/FoodType/update-FoodType/" + id, value);
            console.log(result.data.data);
            console.log(result);
            const action = GetFoodTypeAction()
            dispatch(action)
            history.push('/foodtype')
        } catch (error) {
            console.log(error);
        }
    }
}


export const AddFoodTypeAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post("/FoodType/insert-foodType", value);
            console.log(result.data.data);
            console.log(result);
            history.push('/foodtype')
            const action = GetFoodTypeAction()
            dispatch(action)
        } catch (error) {

        }
    }
}