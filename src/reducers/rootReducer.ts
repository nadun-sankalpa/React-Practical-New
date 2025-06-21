import {combineReducers} from "redux";
import counterReducer from "../slicers/counterSlice";
import {ReducerType} from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    counter: counterReducer

    //TODO - Add more reducers
})

export type RootReducer  = ReturnType<typeof rootReducer>