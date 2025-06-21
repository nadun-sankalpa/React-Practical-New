import {useReducer} from 'react';
import './Counter.css';
import { Message } from '../message/Message';
import { useDispatch, useSelector } from 'react-redux';

import {decrement, increment} from '../../Actions/CounterActions';
import {AppDispatch, RootState} from "../../store/Store";
import {incrementAsync} from "../../slicers/counterSlice";
//define the state of the component


type CounterProps = {
    data: any
}

export function Counter() {
    // const [state, dispatch] = useReducer(CounterSlice, {count: 0, error: null})

    const dispatch = useDispatch<AppDispatch>()
    // const count =useSelector((state: CounterState) => state.count);
    // const error = useSelector((state: CounterState) => state.error);

    const {count, error} = useSelector((state: RootState) => state.counter)


    return (
        <div className="counter">
            <h1>React Counter (Functional Components)</h1>
            <h2>Count: {count}</h2>
            {error && <p className="error">{error}</p>}

            <div>
                <button className="btn" onClick={()=>dispatch(increment())}>+</button>
                <button className="btn" onClick={()=>dispatch(decrement())}>-</button>
                <button className="btn" onClick={()=>dispatch(incrementAsync(1))}>Async Add 1</button>
            </div>
            <Message />
        </div>
    );
}