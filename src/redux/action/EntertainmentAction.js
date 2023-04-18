import { history } from "../../App";
import { http } from "../../services/baseServices";



export const GetEntertainmentAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Entertainment/get-all-entertainment');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_ENTERTAINMENT",
                arrEntertainment: result.data.data
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


export const GetEntertainmentByActionAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/EntertainmentProduct/get-by-entertainment-product?entertainmentId=${id}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_ENTERTAINMENT_ID",
                arrEntertainmentById: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const UpdateEntertainmenAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/Entertainment/get-update-entertainment`, value);

            const action = GetEntertainmentAction()
            dispatch(action)
            history.push('/entertainment')
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddEntertainmenAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Entertainment/get-insert-entertainment`, value);

            const action = GetEntertainmentAction()
            dispatch(action)
            history.push('/entertainment')
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteEntertainmenAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Entertainment/get-delete-entertainment?EntertainmentId=${id}`);

            const action = GetEntertainmentAction()
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}


export const GetEntertainmentByIDActionAction = (pro, en) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/EntertainmentProduct/get-by-entertainment-product?entertainmentProductId=${pro}&entertainmentId=${en}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_ENTERTAINMENT_ID2",
                arrEntertainmentProduct: result.data.data[0]
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}