import { http } from "../../services/baseServices";


export const GetAllStaffAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Account/get-all')
            console.log(result.data.data);
            const action = {
                type: "GET_ALL_STAFF",
                allStaff: result.data.data
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


export const DeleteStaffAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Account/delete-staff?id=${id}`)
            console.log(result.data.data);
            const action = GetAllStaffAction()
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}