import { toast } from "react-toastify";
import { history } from "../../App";
import { http } from "../../services/baseServices";




export const RegisterAction = (data) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Account/register-staff', data)
            console.log(result.data.data);
            history.push('/admin')
        } catch (error) {
            console.log(error);
        }
    }
}


export const LoginAction = (data) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Account/login-username', data)
            console.log(result.data);
            localStorage.setItem('admin', 'staff')
            localStorage.setItem('username', result.data.username)
            dispatch({
                type: "CHECH_LOGIN_RTUE",

            })
            toast(`Đăng Nhập Thành Công`, {
                position: toast.POSITION.TOP_RIGHT
            });
            history.push('/')
            window.location.reload()
        } catch (error) {
            dispatch({
                type: "CHECH_LOGIN",
                data: error.response.data
            })
        }
    }
}