const stateDefault = {
    arrScript: [],
    arrScriptID: {}
}


export const ScriptReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_SCRIPT': {
            state.arrScript = action.arrScript;
            return { ...state }
        }
        case 'GET_LIST_SCRIPT_ID': {
            state.arrScriptID = action.arrScriptID;
            return { ...state }
        }


        default: return state;
    }
}