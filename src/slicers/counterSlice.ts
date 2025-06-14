import {createSlice} from "@reduxjs/toolkit";

export interface CounterState{
    count: number,
    error: string | null
}
interface CounterAction{
    type: "increment" | "decrement",
}

const initialState: CounterState = {
    count: 0,
    error: null
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state) => {
            const newCount = state.count +1;
            const hasError: boolean = newCount > 5;
            if (hasError){
                state.error = "Maximum limit reached"
            }else{
                state.count = newCount
                state.error = null
            }
        },
        decrement:(state)=>{
            const newCount = state.count - 1
            const hasError = newCount < 0
            if (hasError){
                state.error = "Minimum limit reached"
            }else{
                state.count = newCount
                state.error = null
            }
        }

    }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer








// export function CounterSlice(state= initialState, action: CounterAction){
//     const {type} = action
//     switch(type){
//         case "increment":{
//             const newCount = state.count +1
//             const  hasError = newCount > 5
//             return {
//                 ...state,
//                 count: hasError ?state.count : newCount,
//                 error: hasError ? "Count cannot exceed 5" : null
//             }}
//         case "decrement":{
//             const newCountt = state.count - 1
//             const hasError = newCountt < 0
//
//             return {
//                 ...state,
//                 count: hasError ?state.count : newCountt,
//                 error: hasError ? "Count cannot be less than 0" : null
//             }}
//         default:
//             return state
//     }
// }