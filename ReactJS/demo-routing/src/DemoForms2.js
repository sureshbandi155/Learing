import React, { Component } from 'react';

class DemoForms2 extends Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.city = React.createRef();
    }

    handelSubmit = (event) => {
        console.log('You have enter username and city successfully.');
        console.log(this.city.current.value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <form onSubmit={this.handelSubmit.bind(this)}>
                    <h1>UnControlled Form Example</h1>
                    <label>
                        <input type="text" placeholder="User Name" ref={this.name} />
                    </label>
                    <label>
                        <input type="text" placeholder="City" ref={this.city} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}
export default DemoForms2;