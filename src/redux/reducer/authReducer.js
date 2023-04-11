const stateDefault = {
    msg: '',
}


export const authReducer = (state = stateDefault, action) => {
    switch (action.type) {


        case 'CHECH_LOGIN': {
            state.msg = action.data;
            return { ...state }
        }
        case 'CHECH_LOGIN_RTUE': {
            state.msg = '';
            return { ...state }
        }
        case 'LOGOUT': {
            localStorage.setItem('admin', '')
            localStorage.setItem('username', '')
        }
        default: return state;
    }
}