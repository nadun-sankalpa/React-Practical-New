import { createStore } from "redux";
import { counterSlice } from "../slicers/counterSlice";
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slicers/counterSlice";

export const store = configureStore({
    reducer: {
        counterReducer
    }
});

export type CounterState = ReturnType<typeof counterReducer>