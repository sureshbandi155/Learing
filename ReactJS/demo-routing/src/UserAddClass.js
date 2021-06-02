import React, { Component } from 'react';
import axios from 'axios';

class UserAddClass extends Component {
    state = {
        name: ''
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault();

        const userName = { named: this.state.name };
        // fetch('https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     mode: 'cors', //cors domain-origin
        //     body: JSON.stringify(userName) //body data type must match 'Content-Type' header
        // }).then(data => console.log(data));

        axios.post(`https://jsonplaceholder.typicode.com/users`, userName) //.post('', {userName})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <label>
                        UserName:
                <input type="text" name="name" onChange={this.changeNameHandler} />
                    </label>
                    <input type="submit" value="Add User" />
                </form>
            </>
        );
    }
}

export default UserAddClass;