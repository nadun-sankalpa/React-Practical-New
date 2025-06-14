import {createContext} from 'react';
import './App.css';
import { Counter } from "./Component/Counter/Counter";
import { Provider } from 'react-redux';
import { store } from './store/Store'

export const MessageContext= createContext("");
function App(){

    const  message = "Welcome to React";


    return (
        <Provider store = {store}>
            <MessageContext.Provider value={message}>
                <div className="app">
                    <Counter/>
                </div>
            </MessageContext.Provider>
        </Provider>
    );
}

export default App;