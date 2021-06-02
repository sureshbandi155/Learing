import React, { useState } from 'react';
import FormWelcome from './FormWelcome';
import App from './App';

const DemoForms1FunCmp = props => {

    const [formData, SetFormData] = useState({
        uname: '',
        city: '',
        flavor: ''
    });
    const [flag, setFlag] = useState(false);
    const handelChange = (event) => {
        let controlledName = event.target.name;
        let controlledValue = event.target.value;
        SetFormData({
            ...formData,
            [controlledName]: controlledValue
        })

    }

    const handelSubmit = (event) => {
        setFlag(true);
        console.log(formData);
        console.log(flag);

        event.preventDefault();
    }
    console.log(formData);
    console.log(flag);
    let header = '';
    if (formData.uname) {
        header = <h1>Hello..!! {formData.uname}</h1>
    }
    else header = '';
    return (
        <>
            <form onSubmit={handelSubmit.bind(this)}>
                {header}
                <h1>Controlled Form Example</h1>
                <label>
                    <input type="text" name="uname" placeholder="User Name" value={formData.uname} onChange={handelChange.bind(this)} />
                    <input type="text" name="city" placeholder="City" value={formData.city} onChange={handelChange.bind(this)} />
                </label>
                <label>
                    Pick your icecream flavor:
            <select name="flavor" value={formData.flavor} onChange={handelChange.bind(this)}>
                        <option value="flavor1">Flavor1</option>
                        <option value="flavor2">Flavor2</option>
                        <option value="flavor3">Flavor3</option>
                        <option value="flavor4">Flavor4</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {flag ? <FormWelcome userName={formData.uname} /> : <App />}
        </>
    );
}

export default DemoForms1FunCmp;