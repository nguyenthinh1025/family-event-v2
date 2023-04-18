import { history } from "../../App";
import { http } from "../../services/baseServices";
import { GetEntertainmentAction } from "./EntertainmentAction";



export const GetEntertainmentProductAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/EntertainmentProduct/get-all-entertainment-product');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_ENTERTAINMENTPRODUCT",
                arrEntertainmentProduct: result.data.data
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


export const GetEntertainmentProductByIDAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Entertainment/get-by-id-Entertainment?EntertainmentId=${id}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_ENTERTAINMENTPRODUCT_ID",
                arrEntertainmentProductById: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}



export const UpdateEntertainmentProductAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/EntertainmentProduct/update-entertainment-product`, value);

            const action = GetEntertainmentProductAction()
            dispatch(action)
            // history.push('/entertainment')
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteEntertainmentProductAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/EntertainmentProduct/delete-entertainment-product?entertainmentProductId=${value}`);

            const action = GetEntertainmentProductAction()
            dispatch(action)
            // history.push('/entertainment')
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}



export const AddEntertainmentProductAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/EntertainmentProduct/insert-entertainment-product`, value);

            // const action = GetEntertainmentAction()
            // dispatch(action)
            // history.push('/entertainment')
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
}
