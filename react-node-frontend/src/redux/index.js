import newsFilterReducer from "./reducers/News";
import { newsSourceReducer } from "./reducers/News";
import { combineReducers } from "redux";
const reducers = combineReducers(
    {
        newsFilterReducer,
        newsSourceReducer
     
        
    }
);

export default reducers;

