import { http } from "../../services/baseServices";



export const GetDecorationProductAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/DecorationProduct/get-all-decoration-product');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_DECORATIONPRODUCT",
                arrDecorationProduct: result.data.data
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


export const GetDecorationProductByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/DecorationProduct/get-by-id-decoration-product?decorationId=${id}`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_DECORATIONPRODUCT_BYID",
                arrDecorationProductById: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}