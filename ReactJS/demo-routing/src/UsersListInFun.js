import { useEffect, useState } from "react";

import axios from 'axios';
const UserListInFun = props => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                // console.log(res.data);
                setUsers(
                    ...users,
                    res.data
                );
            })
            .catch(err => console.log(err))
    })
    console.log(users);
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
                    {users.map(user => {
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


export default UserListInFun;