import {combineReducers} from "redux";
import counterReducer from "../slicers/counterSlice";


const rootReducer = combineReducers({
    counter: counterReducer

    //TODO - Add more reducers
})