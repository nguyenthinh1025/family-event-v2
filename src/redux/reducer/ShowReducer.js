const stateDefault = {
    arrShow: [],
    detailShow: {}
}


export const ShowReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'GET_LIST_SHOW': {
            state.arrShow = action.arrShow;
            return { ...state }
        }
        case 'SEARCH_BY_NAME_SHOW': {
            state.arrShow = action.searchByNameShow;
            return { ...state }
        }
        case 'DETAIL_SHOW': {
            state.detailShow = action.detailShow;
            return { ...state }
        }

        default: return state;
    }
}

