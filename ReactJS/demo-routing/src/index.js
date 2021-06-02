import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import DemoUseLocation from './DemoUseLocation';
import DemoUseParams from './DemoUseParams';
import DemoForms1 from './DemoForms1';
import DemoForms1FunCmp from './DemoForms1FunCmp';
import DemoForms2 from './DemoForms2';
import DemoUseRefs from './DemoUseRefs';

import reportWebVitals from './reportWebVitals';
import UserListInClass from './UsersListInClass';
import UserAddClass from './UserAddClass';
import UserUpdateClass from './UserUpdateClass';
import UserDeleteClass from './UserDeleteClass';
import UserListInFun from './UsersListInFun';
import DemoContext from './DemoContext';
import UserAddFun from './UserAddFun';
const unorderStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'center'
}
const listStyle = {
    padding: '10px 20px',
    display: 'inline-block',
}
const route = (
    <BrowserRouter>
        <h1>Routing In Index file</h1>
        <ul style={unorderStyle}>
            <li style={listStyle}>
                <NavLink to="/" exact activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>App</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/about" exact activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>About</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/contact" exact activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Contact</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/dm-location" exact activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Demo Use Location</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/dm-params/124497/suresh/Tirupati" exact activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Demo Use Params</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/dm-fomrs1" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Demo Forms1</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/dm-fomrs1-funcmp" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Demo Forms1 Funcmp</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/dm-forms2" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>Demo Forms2 Ref</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/use-refs" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>useRefs</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/user-list-class" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserListInClass</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/user-add-class" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserAddClass</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/UserUpdateClass" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserUpdateClass</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/UserDeleteClass" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserDeleteClass</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/UserListInFun" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserListInFun</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/UserAddFun" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>UserAddFun</NavLink>
            </li>
            <li style={listStyle}>
                <NavLink to="/DemoContext" activeStyle={{ color: 'salmon' }} style={{ 'textDecoration': 'none' }}>DemoContext</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/dm-location" component={DemoUseLocation} />
            <Route path="/dm-params/:id/:name/:address" component={DemoUseParams} />
            <Route path="/dm-fomrs1" component={DemoForms1} />
            <Route path="/dm-fomrs1-funcmp" component={DemoForms1FunCmp} />
            <Route path="/dm-forms2" component={DemoForms2} />
            <Route path="/use-refs" component={DemoUseRefs} />
            <Route path="/user-list-class" component={UserListInClass} />
            <Route path="/user-add-class" component={UserAddClass} />
            <Route path="/UserUpdateClass" component={UserUpdateClass} />
            <Route path="/UserDeleteClass" component={UserDeleteClass} />
            <Route path="/UserListInFun" component={UserListInFun} />
            <Route path="/UserAddFun" component={UserAddFun} />
            <Route path="/DemoContext" component={DemoContext} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(
    route,
    // <React.StrictMode>
    //     <DemoContext />
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
