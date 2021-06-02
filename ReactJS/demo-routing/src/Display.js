import { useContext } from 'react';
import LoginContext from './LoginContext';

function Display() {
    console.log('[Display..] component');
    let adminInfo = useContext(LoginContext);
    // let adminName = useContext(LoginContext);
    // console.log(adminInfo);
    return (
        <div>
            <h2>I am from diaplay component</h2>
            <LoginContext.Consumer>
                {value => <div>Login Type: {value}</div>}
                {/* {value => <div>Login Type: {value.userInfo[0]}</div>} */}
            </LoginContext.Consumer>

            <p>Below is render using useContext() using Fun Cmp</p>
            <p>Login Type: {adminInfo} </p>
        </div>
    );
}

export default Display;