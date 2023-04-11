import { http } from "../../services/baseServices";


export const ChartMonth1Action = () => {
    return async (dispatch) => {
        try {
            const action3 = {
                type: "DISPLAY_LOADING"
            }
            dispatch(action3)
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-1-1&EndDate=2023-1-31');
            // console.log(result.data.data[0]);
            const action = {
                type: "MONTH_1",
                month1: result.data.data[0]
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth2Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-2-1&EndDate=2023-2-28');
            const action = {
                type: "MONTH_2",
                month2: result.data.data[0]
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth3Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-3-1&EndDate=2023-3-31');

            const action = {
                type: "MONTH_3",
                month3: result.data.data[0]
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth4Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-4-1&EndDate=2023-4-30');
            const action = {
                type: "MONTH_4",
                month4: result.data.data[0]
            }
            dispatch(action)

        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonth5Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-5-1&EndDate=2023-5-31');
            const action = {
                type: "MONTH_5",
                month5: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonth6Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-6-1&EndDate=2023-6-30');
            const action = {
                type: "MONTH_6",
                month6: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth7Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-7-1&EndDate=2023-7-31');
            const action = {
                type: "MONTH_7",
                month7: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth8Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-8-1&EndDate=2023-8-31');
            const action = {
                type: "MONTH_8",
                month8: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth9Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-9-1&EndDate=2023-9-30');
            const action = {
                type: "MONTH_9",
                month9: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth10Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-10-1&EndDate=2023-10-30');
            const action = {
                type: "MONTH_10",
                month10: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth11Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-11-1&EndDate=2023-11-30');
            const action = {
                type: "MONTH_11",
                month11: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonth12Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-12-1&EndDate=2023-12-31');
            const action = {
                type: "MONTH_12",
                month12: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartQuy1Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-1-1&EndDate=2023-3-31');
            const action = {
                type: "QUY_1",
                quy1: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}


export const ChartQuy2Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-4-1&EndDate=2023-6-30');
            const action = {
                type: "QUY_2",
                quy2: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartQuy3Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-7-1&EndDate=2023-9-30');
            const action = {
                type: "QUY_3",
                quy3: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}


export const ChartQuy4Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=0&StartDate=2023-10-1&EndDate=2023-12-31');
            const action = {
                type: "QUY_4",
                quy4: result.data.data[0]
            }
            dispatch(action)
            const action3 = {
                type: "HIDE_LOADING"
            }
            dispatch(action3)
        } catch (error) {
            console.log(error);
        }
    }
}







export const ChartMonthTron3Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-3-1&EndDate=2023-3-31');

            const action = {
                type: "TRON_3",
                tron3: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron2Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-2-1&EndDate=2023-2-28');

            const action = {
                type: "TRON_2",
                tron2: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron1Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-1-1&EndDate=2023-1-31');

            const action = {
                type: "TRON_1",
                tron1: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron4Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-4-1&EndDate=2023-4-30');

            const action = {
                type: "TRON_4",
                tron4: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonthTron5Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-5-1&EndDate=2023-5-31');

            const action = {
                type: "TRON_5",
                tron5: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonthTron6Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-6-1&EndDate=2023-6-30');

            const action = {
                type: "TRON_6",
                tron6: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonthTron7Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-7-1&EndDate=2023-7-31');

            const action = {
                type: "TRON_7",
                tron7: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron8Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-8-1&EndDate=2023-8-31');

            const action = {
                type: "TRON_8",
                tron8: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron9Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-9-1&EndDate=2023-9-30');

            const action = {
                type: "TRON_9",
                tron9: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}
export const ChartMonthTron10Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=22023-10-1&EndDate=2023-10-30');

            const action = {
                type: "TRON_10",
                tron10: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron11Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-11-1&EndDate=2023-11-30');

            const action = {
                type: "TRON_11",
                tron11: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}

export const ChartMonthTron12Action = () => {
    return async (dispatch) => {
        try {
            let result = await http.get('/Statistical/get-data-statistial?type=6&StartDate=2023-12-1&EndDate=2023-12-31');

            const action = {
                type: "TRON_12",
                tron12: result.data.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
}