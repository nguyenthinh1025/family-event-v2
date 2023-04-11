const stateDefault = {
    month1: {},
    month2: {},
    month3: {},
    month4: {},
    month5: {},
    month6: {},
    month7: {},
    month8: {},
    month9: {},
    month10: {},
    month11: {},
    month12: {},
    quy1: {},
    quy2: {},
    quy3: {},
    quy4: {},
    tron3: [],
    tron2: [],
    tron1: [],
    tron4: [],
    tron5: [],
    tron6: [],
    tron7: [],
    tron8: [],
    tron9: [],
    tron10: [],
    tron11: [],
    tron12: [],
}


export const ChartReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'MONTH_1': {
            state.month1 = action.month1;
            return { ...state }
        }

        case 'MONTH_2': {
            state.month2 = action.month2;
            return { ...state }
        }

        case 'MONTH_3': {
            state.month3 = action.month3;
            return { ...state }
        }

        case 'MONTH_4': {
            state.month4 = action.month4;
            return { ...state }
        }
        case 'MONTH_5': {
            state.month5 = action.month5;
            return { ...state }
        }
        case 'MONTH_6': {
            state.month6 = action.month6;
            return { ...state }
        }
        case 'MONTH_7': {
            state.month7 = action.month7;
            return { ...state }
        }
        case 'MONTH_8': {
            state.month8 = action.month8;
            return { ...state }
        }
        case 'MONTH_9': {
            state.month9 = action.month9;
            return { ...state }
        }
        case 'MONTH_10': {
            state.month10 = action.month10;
            return { ...state }
        }
        case 'MONTH_11': {
            state.month11 = action.month11;
            return { ...state }
        }
        case 'MONTH_12': {
            state.month12 = action.month12;
            return { ...state }
        }
        case 'QUY_1': {
            state.quy1 = action.quy1;
            return { ...state }
        }
        case 'QUY_2': {
            state.quy2 = action.quy2;
            return { ...state }
        }
        case 'QUY_3': {
            state.quy3 = action.quy3;
            return { ...state }
        }
        case 'QUY_4': {
            state.quy4 = action.quy4;
            return { ...state }
        }
        case 'TRON_3': {
            state.tron3 = action.tron3;
            return { ...state }
        }
        case 'TRON_2': {
            state.tron2 = action.tron2;
            return { ...state }
        }
        case 'TRON_1': {
            state.tron1 = action.tron1;
            return { ...state }
        }
        case 'TRON_4': {
            state.tron4 = action.tron4;
            return { ...state }
        }
        case 'TRON_5': {
            state.tron5 = action.tron5;
            return { ...state }
        }
        case 'TRON_6': {
            state.tron6 = action.tron6;
            return { ...state }
        }
        case 'TRON_7': {
            state.tron7 = action.tron7;
            return { ...state }
        }
        case 'TRON_8': {
            state.tron8 = action.tron8;
            return { ...state }
        }
        case 'TRON_9': {
            state.tron9 = action.tron9;
            return { ...state }
        }
        case 'TRON_10': {
            state.tron10 = action.tron10;
            return { ...state }
        }
        case 'TRON_11': {
            state.tron11 = action.tron11;
            return { ...state }
        }
        case 'TRON_12': {
            state.tron12 = action.tron12;
            return { ...state }
        }
        default: return state;
    }
}