import axios from "axios";
import { history } from "../../App";
import { http } from "../../services/baseServices";

export const GetProductAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Product/get-all-product')
            const action = {
                type: "GET_LIST_PRODUCT",
                arrProduct: result.data.data
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

export const GetProductByIdAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Product/search-by-id-product?id=${id}`)
            const action = {
                type: "GET_LIST_PRODUCT_BY_ID",
                productID: result.data.data[0]
            }
            console.log(result);
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const SearchByNameProduct = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Product/search-by-name-product?name=${name}`)
            console.log(result.data.data);
            const action = {
                type: "SEARCH_BY_NAME_PRODUCT",
                searchByNameProduct: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const DeleteProductAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Product/delete-product?id=${id}`)
            const action = GetProductAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const UpdateProductAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/Product/update-product', value)
            const action = GetProductAction();
            dispatch(action)
            history.push('/product')
        } catch (error) {
            console.log(error);
        }
    }
}
export const AddProductAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Product/insert-product', value)
            const action = GetProductAction();
            dispatch(action)
            history.push('/product')
        } catch (error) {
            console.log(error);
        }
    }
}