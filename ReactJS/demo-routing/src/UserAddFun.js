import React, { Component, useEffect } from 'react';
import axios from 'axios';

const UserAddFun = props => {
    const [name, setName] = useEffect('');
    const changeNameHandler = (event) => {
        setName(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();

        const userName = { name: name };

        axios.post(`https://jsonplaceholder.typicode.com/users`, userName) //.post('', {userName})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <form onSubmit={submitHandler.bind(this)}>
                <label>
                    UserName:
                </label>
                <input type="text" name="name" onChange={changeNameHandler.bind(this)} />
                <input type="submit" value="Add User" />
            </form>
        </>
    );
}


export default UserAddFun;