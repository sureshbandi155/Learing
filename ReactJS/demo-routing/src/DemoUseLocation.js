import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const DemoUseLocation = props => {
    const history = useHistory();
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <>
            <p>Demo Use Location Screen</p>
            <p>Current URL: {pathname}</p>
            <button onClick={() => history.goBack()}>GoBack</button>
        </>
    );
}



export default DemoUseLocation;