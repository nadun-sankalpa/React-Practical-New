import { createStore } from "redux";
import {counterSlice} from "../slicers/counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import  counterReducer  from "../slicers/counterSlice"
import {rootReducer} from "../reducers/rootReducer";


export const store= configureStore({
    reducer: rootReducer
});

export type  AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>