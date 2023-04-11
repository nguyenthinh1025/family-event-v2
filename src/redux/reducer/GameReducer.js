const stateDefault = {
    arrGame: [],
    detailGame: {},
}


export const GameReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIST_GAME': {
            state.arrGame = action.arrGame;
            return { ...state }
        }
        case 'SEARCH_BY_NAME_GAME': {
            state.arrGame = action.searchByNameGame;
            return { ...state }
        }
        case 'DETAIL_GAME': {
            state.detailGame = action.detailGame;
            return { ...state }
        }
        default: return state;
    }
}

