import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {
    Add = () => { this.props.dispatch({ type: 'ADD' }) };
    Delete = () => { this.props.dispatch({ type: 'DELETE' }) };
    render() {
        return (
            <div>
                <h2>Welcome to users component</h2>
                <div>
                    <p>UserCount: <b>{this.props.userCount}</b></p>
                    <button onClick={this.Add}>Add User</button>
                    <button onClick={this.Delete}>Delete User</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        userCount: state.count
    }
}
const UserData = connect(mapStateToProps)(Users);
export default UserData;