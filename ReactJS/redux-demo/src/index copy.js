import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';

// 1 action type, payload(data)
const action = {
    type: 'changeState', payload: { newState: 'New Updated state from store..' }
}
// 2. function reducer has two paramers one state and 2 nd is action 
//reducer will check the type of action and then update the state

function reducer(state = 'Old state', action) {
    if (action.type === 'changeState') {
        return action.payload.newState
    }

}
// 3. create a redux store 1st para is a reducer 
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(action);//reducer is invoked, which is true, check for the type of action
console.log(store.getState());


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
