import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import UserData from './UserData';

const userData = {
    count: 0
}
const reducer = (state = userData, action) => {
    switch (action.type) {
        case 'ADD':
            return { count: state.count + 1 };

        case 'DELETE':
            return { count: state.count - 1 };
        default:
            return state;
    }
}
const store = createStore(reducer);
const MyApp = () => (
    <Provider store={store}>
        <UserData />
    </Provider>
);


ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
