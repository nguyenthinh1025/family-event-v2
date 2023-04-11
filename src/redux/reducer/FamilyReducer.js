const stateDefault = {
    arrFamily: [],

}


export const FamilyReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_FAMILY': {
            state.arrFamily = action.arrFamily;
            return { ...state }
        }


        default: return state;
    }
}