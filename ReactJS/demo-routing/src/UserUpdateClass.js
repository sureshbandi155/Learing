import React, { Component } from 'react';
import axios from 'axios';

class UserUpdateClass extends Component {
    state = {
        id: 0,
        name: ''
    }
    changeHandler = (event) => {
        let controlName = event.target.name;
        let controlValue = event.target.value;
        this.setState(
            { [controlName]: controlValue }
        );
    }
    submitHandler = (event) => {
        event.preventDefault();

        const user = { id: this.state.id, name: this.state.name };
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
        //     method: 'PUT',
        //     mode: 'cors', //cors domain-origin
        //     body: JSON.stringify(user) //body data type must match 'Content-Type' header
        // })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))

        axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, user)
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
                    <h1>Update Details</h1>
                    <label>User Id:</label>
                    <input type="number" name="id" onChange={this.changeHandler} />
                    <label> User Name:</label>
                    <input type="text" name="name" onChange={this.changeHandler} />
                    <input type="submit" value="Update User" />
                </form>
            </>
        );
    }
}

export default UserUpdateClass;