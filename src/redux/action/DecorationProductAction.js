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
            let result = await http.get(`/DecorationProduct/get-by-id-decoration-product?productId=${id}`);
            console.log(result.data.data);
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

export const GetDecorationProductByDecorIdAction = (id, id1) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/DecorationProduct/filter-decoration-product?decorationId=${id}&productId=${id1}&quantityOption=true`);
            console.log(result.data.data);
            const action = {
                type: "GET_LIST_DECORATIONPRODUCT_BYID_DECOR",
                arrDecorProductByDecorId: result.data.data[0]
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const AddProductByDecorIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/DecorationProduct/insert-decoration-product`, id);
            console.log(result.data.data);
            // const action = {
            //     type: "GET_LIST_DECORATIONPRODUCT_BYID_DECOR",
            //     arrDecorProductByDecorId: result.data.data[0]
            // }
            // dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateProductByDecorIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.put(`/DecorationProduct/update-decoration-product`, id);
            console.log(result.data.data);
            // const action = {
            //     type: "GET_LIST_DECORATIONPRODUCT_BYID_DECOR",
            //     arrDecorProductByDecorId: result.data.data[0]
            // }
            // dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const DeleteProductByDecorIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/DecorationProduct/delete-decoration-product?decorationProductId=${id}`);
            console.log(result.data.data);
            // const action = {
            //     type: "GET_LIST_DECORATIONPRODUCT_BYID_DECOR",
            //     arrDecorProductByDecorId: result.data.data[0]
            // }
            // dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}