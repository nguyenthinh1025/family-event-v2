import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import reduxThunk from 'redux-thunk';
import { DecorationProductReducer } from './reducer/DecorationProductReducer';
import { DecorReducer } from './reducer/DecorReducer';

import { DrinkReducer } from './reducer/DrinkReducer';
import { EventBookerReducer } from './reducer/EventBookerReducer';
import { EventTypeReducer } from './reducer/EventTypeReducer';
import { FoodReducer } from './reducer/FoodReducer';
import { FoodTypeReducer } from './reducer/FoodTypeReducer';
import { GameReducer } from './reducer/GameReducer';
import { MenuProductReducer } from './reducer/MenuProductReducer';
import { MenuReducer } from './reducer/MenuReducer';
import { ProductReducer } from './reducer/ProductReducer';
import { RoomReducer } from './reducer/RoomReducer';
import { ShowReducer } from './reducer/ShowReducer';
import { FamilyReducer } from './reducer/FamilyReducer';
import { ChartReducer } from './reducer/ChartReducer';
import { EntertainmentReducer } from './reducer/EntertainmentReducer';
import { EntertainmentProductReducer } from './reducer/EntertainmentProductReducer';
import { LoadingReducer } from './reducer/LoadingReducer';
import { ScriptReducer } from './reducer/ScriptReducer';
import { ListEventReducer } from './reducer/ListEventReducer';
import { authReducer } from './reducer/authReducer';
import { AdminReducer } from './reducer/AdminReducer';


const rootReducer = combineReducers({
    DrinkReducer,
    FoodReducer,
    FoodTypeReducer,
    GameReducer,
    ShowReducer,
    DecorReducer,
    ProductReducer,
    MenuReducer,
    MenuProductReducer,
    DecorationProductReducer,
    RoomReducer,
    EventTypeReducer,
    EventBookerReducer,
    FamilyReducer,
    ChartReducer,
    EntertainmentReducer,
    EntertainmentProductReducer,
    LoadingReducer,
    ScriptReducer,
    ListEventReducer,
    authReducer,
    AdminReducer,
})

let middleWare = applyMiddleware(reduxThunk);
let composeCustom = compose(middleWare, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, composeCustom);