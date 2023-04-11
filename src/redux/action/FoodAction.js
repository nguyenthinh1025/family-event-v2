
import { history } from "../../App";
import { http } from "../../services/baseServices";

export const GetFoodAction = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Food/get-all-food');
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "GET_LIST_FOOD",
                arrFood: result.data.data
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

export const SearchFoodAction = (name) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Food/filter-food?name=${name}&foodOption=true`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "SEARCH_LIST_FOOD_NAME",
                arrSearchFoodName: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const SearchFoodPriceAction = (minPrice, maxPrice) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Food/filter-food?${minPrice}=10000&maxPrice=${maxPrice}&foodOption=true`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "SEARCH_LIST_FOOD_PRICE",
                arrSearchFoodPrice: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}



export const SearchFoodNamePriceAction = (name, minPrice, maxPrice) => {
    return async (dispatch) => {
        try {
            let result = await http.get(`/Food/filter-food?name=${name}&${minPrice}=10000&maxPrice=${maxPrice}&foodOption=true`);
            console.log(result.data.data);
            console.log(result);
            const action = {
                type: "SEARCH_LIST_FOOD",
                arrSearchFood: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}



export const DeleteFoodAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.delete(`/Food/delete-food?id=${id}`);
            const action = GetFoodAction()
            dispatch(action)
        } catch (error) {

        }
    }
}

export const UpdateFoodAciton = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.put('/Food/update-food', value);
            const action = GetFoodAction()
            dispatch(action)
            history.push('/food')
        } catch (error) {

        }
    }
}


export const DetailFoodAction = (id) => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Food/get-food-by-id?id=' + id);
            let action = {
                type: "DETAIL_FOOD",
                detailFood: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}


export const AddFoodAction = (value) => {
    return async (dispatch) => {
        try {
            let result = await http.post('/Food/insert-food', value);
            const action = GetFoodAction()
            dispatch(action)
            history.push('/food')
        } catch (error) {

        }
    }

}