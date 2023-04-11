
const stateDefault = {
    allStaff: [],
}


export const AdminReducer = (state = stateDefault, action) => {
    switch (action.type) {



        case 'GET_ALL_STAFF': {
            state.allStaff = action.allStaff;
            return { ...state }
        }

        default: return state;
    }
}