import { async } from "@firebase/util";
import { toast } from "react-toastify";
import { history } from "../../App";
import { http } from "../../services/baseServices"



export const GetGameAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Game/get-all');
            const action = {
                type: "GET_LIST_GAME",
                arrGame: result.data.data
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

export const UpdateGameAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/Game/update-game', value);
            const action = GetGameAction()
            dispatch(action)
            history.push('/game')
        } catch (error) {
            console.log(error);
        }
    }
}

export const SearchByNameGame = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Game/search-by-name-Game?gameName=${name}`)
            console.log(result.data.data);
            const action = {
                type: "SEARCH_BY_NAME_GAME",
                searchByNameGame: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const DeleteGameAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete('/Game/delete-game?id=' + id)
            const action = GetGameAction();
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const AddGameAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.post(`/Game/insert-game`, id)

            const action = GetGameAction();
            dispatch(action);
            history.push('/game');

        } catch (error) {
            console.log(error);
        }
    }
}

export const DetailGameAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Game/get-by-id-game?gameId=' + id);
            const action = {
                type: "DETAIL_GAME",
                detailGame: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}