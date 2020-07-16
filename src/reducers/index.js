import {commonReducer} from "./commonReducer";
import {combineReducers} from "redux";
import {colsReducer} from "./colsReducer";

const rootReducer = combineReducers({
    colsReducer,
    commonReducer
})

export default rootReducer;