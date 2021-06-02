import { Component } from "react";

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    blurChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div>
                <form className='login'>
                    <lable>Email</lable>
                    <input id="email" type="email" name="email" onBlur={this.blurChangeHandler} />
                    <lable>Password</lable>
                    <input id="password" type="password" name="password" onBlur={this.blurChangeHandler} />

                </form>
            </div>
        );
    }
}

export default Login;