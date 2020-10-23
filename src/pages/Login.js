import React, { Component } from "react";
import {Redirect} from "react-router-dom"


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email: "",
            password: "",
            redirect: null
        }
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    sendLogin = (e) => {
        e.preventDefault();
        //TODO: change url to real backend, currently using postman mock server
        return fetch('https://79771b58-1e8b-4f8a-b168-c46e4f0fc9cc.mock.pstmn.io/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
            })
          })
          .then((response) => {
            if (response.ok){
                console.log("ok");
                this.setState({redirect: "/menu"})
            }
            else window.alert("Invalid username or password.")
          })
      };

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handlePasswordChange} />
                </div>
                
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button onClick={this.sendLogin} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}