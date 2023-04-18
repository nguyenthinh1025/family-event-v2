const stateDefault = {
    arrMenu: [],
    arrMenuById: {},
    arrMenuByProductId: [],
    arrMenuList: []
}


export const MenuReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'GET_LIT_MENU': {
            state.arrMenu = action.arrMenu;
            return { ...state }
        }
        case 'GET_LIT_MENU_BYID': {
            state.arrMenuById = action.arrMenuById;
            return { ...state }
        }
        case 'GET_LIT_MENU_BYID_PRODUCT': {
            state.arrMenuByProductId = action.arrMenuByProductId;
            return { ...state }
        }
        case 'ADD_NEW_OBJECT': {
            let gh = [...state.arrMenuList];
            let gh1 = { ...action.arrMenuList, quantity: 1 };
            let sp = gh.find(item => item.foodId === gh1.foodId);
            if (sp) {
                sp.quantity += 1;
            } else {
                gh.push(gh1);
            }

            state.arrMenuList = gh;
            return { ...state }

        }
        case 'TANG_GIAM_SO_LUONG': {
            let gh = [...state.arrMenuList];
            let ghTangGiam = gh.find(item => item.foodId === action.maSanPham);
            if (ghTangGiam) {
                ghTangGiam.quantity += action.quantity;
                if (ghTangGiam.quantity < 1) {
                    if (window.confirm('Are sure want to delete?')) {
                        gh = gh.filter(item => item.foodId !== action.maSanPham);
                        state.arrMenuList = gh;
                        return { ...state }
                    }
                }
            }
            state.arrMenuList = gh;
            return { ...state }
        }
        case 'XOA_SP': {
            let gh = [...state.arrMenuList];
            gh = gh.filter(item => item.foodId !== action.sanPhamClick);
            state.arrMenuList = gh;
            return { ...state }
        }

        default: return state;
    }
}