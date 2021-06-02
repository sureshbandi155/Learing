import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const App = props => {
    // let login = 'false';

    // functional hooks useHistory, push()
    // The cmp that uses useHistory, that should have be called in <Route /> in the parent componet
    const history = useHistory();
    const { pathname } = useLocation();
    const onSubmitHandler = () => {
        console.log(history);
        history.push('/about/');
        // login = 'true';
    }
    const redireAboutPageHandler = () => {
        props.history.push('/about');
    }
    const goBackHandler = () => {
        props.history.goBack();
    }

    return (

        <>
            <p>Contact component</p>
            {/* {login ? <Redirect to="/about" /> : null} */}
            <button onClick={onSubmitHandler}>About</button>
            <button onClick={redireAboutPageHandler}>About</button>
            <button onClick={goBackHandler}>GoBack..!</button>
            <br />
            <button>Get pathname..!</button>
            <p>Here is your PathName: {pathname}</p>

        </>

    );
}


export default App;
