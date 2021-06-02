import React, { Component } from 'react';
import axios from 'axios';

class UserDeleteClass extends Component {
    state = {
        id: 0
    }
    changeHandler = (event) => {
        this.setState({ id: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault();

        const user = { id: this.state.id };
        // fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`, {
        //     method: 'DELETE',
        //     mode: 'cors', //cors domain-origin
        //     body: JSON.stringify(user) //body data type must match 'Content-Type' header
        // })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))

        axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));

    }


    render() {

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <h1>Update Details</h1>
                    <label>User Id:</label>
                    <input type="number" name="id" onChange={this.changeHandler} />
                    <input type="submit" value="Delete User" />
                </form>
            </>
        );
    }
}

export default UserDeleteClass;