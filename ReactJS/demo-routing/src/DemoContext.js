//React context
//color context theme login types admin credentials

import React from 'react';
import LoginContext from './LoginContext';
import Display from './Display';

function DemoContext() {
    return (
        // <LoginContext.Provider value={{ userInfo: ["Admin", "suresh"] }}>
        <LoginContext.Provider value="Admin">
            <div>
                <Display />
            </div>
        </LoginContext.Provider>
    )
}

// 1. create context
// const LoginContext = createContext();

// function DemoContext(){
//     return(
//         <LoginContext.Provider value="Admin">
//         <div>
//         <Display />
//         <App />
//         </div>
//         </LoginContext.Provider>
//     )
// }

// function Display(){
//     return(
//         <LoginContext.Consumer>
//         {value=><div>Login Type: {value}</div>}
//         </LoginContext.Consumer>
//     );
// }

export default DemoContext;