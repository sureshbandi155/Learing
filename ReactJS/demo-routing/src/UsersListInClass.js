import React, { Component } from 'react';
import axios from 'axios';

class UserListInClass extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
        //     .then(res => res.json())
        //     .then(res => this.setState({ users: res }))

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.setState({ users: res.data });
                console.log(res);
            })
            .catch(err => console.log(err))
    }


    render() {
        console.log(this.state.users);
        return (
            <>
                <table border="3">
                    <thead>
                        <tr>UserDetials</tr>
                        <tr>
                            <td><b>Id</b></td>
                            <td><b>UserName</b></td>
                            <td><b>Email</b></td>
                            <td><b>Street</b></td>
                            <td><b>Zipcode</b></td>
                            <td><b>phone</b></td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.zipcode}</td>
                                <td>{user.phone}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </>
        );
    }
}

export default UserListInClass;