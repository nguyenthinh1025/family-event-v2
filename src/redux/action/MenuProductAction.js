import { http } from "../../services/baseServices";


export const GetListMenuProductAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/MenuProduct/get-all-menu-product');
            const action = {
                type: "GET_LIT_MENU_PRODUCT",
                arrMenuProduct: result.data.data
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