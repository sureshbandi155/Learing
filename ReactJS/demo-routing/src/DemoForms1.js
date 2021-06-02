import React, { Component } from 'react';
import FormWelcome from './FormWelcome';
import App from './App';

class DemoForms1 extends Component {
    state = {
        uname: '',
        city: '',
        flavor: '',
        flag: false
    };

    handelChange = (event) => {
        let controlledName = event.target.name;
        let controlledValue = event.target.value;
        this.setState({ [controlledName]: controlledValue });

    }
    handelSubmit = (event) => {
        this.setState({ flag: true }, () => console.log(this.state));
        event.preventDefault();
    }
    render() {
        let header = '';
        if (this.state.uname) {
            header = <h1>Hello..!! {this.state.uname}</h1>
        }
        else header = '';
        return (
            <>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    {header}
                    <h1>Controlled Form Example</h1>
                    <label>
                        <input type="text" name="uname" placeholder="User Name" value={this.state.uname} onChange={this.handelChange.bind(this)} />
                        <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handelChange.bind(this)} />
                    </label>
                    <label>
                        Pick your icecream flavor:
            <select name="flavor" value={this.state.flavor} onChange={this.handelChange.bind(this)}>
                            <option value="flavor1">Flavor1</option>
                            <option value="flavor2">Flavor2</option>
                            <option value="flavor3">Flavor3</option>
                            <option value="flavor4">Flavor4</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.flag ? <FormWelcome userName={this.state.uname} /> : <App />}
            </>
        );
    }
}
export default DemoForms1;