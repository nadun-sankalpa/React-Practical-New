import {useReducer} from 'react';
import './Counter.css';
import { Message } from '../message/Message';
import {counterSlice} from '../../slicers/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState } from '../../store/Store';
import {decrement, increment} from '../../Actions/CounterActions';
//define the state of the component


type CounterProps = {
    data: any
}

export function Counter() {
    // const [state, dispatch] = useReducer(CounterSlice, {count: 0, error: null})

    const dispatch = useDispatch()
    const count =useSelector((state: CounterState) => state.count);
    const error = useSelector((state: CounterState) => state.error);


    return (
        <div className="counter">
            <h1>React Counter (Functional Components)</h1>
            <h2>Count: {count}</h2>
            {error && <p className="error">{error}</p>}

            <div>
                <button className="btn" onClick={()=>dispatch(increment())}>+</button>
                <button className="btn" onClick={()=>dispatch(decrement())}>-</button>
            </div>
            <Message />
        </div>
    );
}