import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";

export default class SignUp extends Component {

    password;
    address;

    constructor(props){
        super(props);
        this.state={redirect:null};
    }
    RegistrationCall=(event)=>{
        event.preventDefault();
        //TODO: change url to real backend, currently using postman mock server
        return fetch('http://coms-319-t15.cs.iastate.edu/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: this.address,
                password: this.password
            })
        })
            .then((response) => {
                if (response.ok){
                    console.log("ok");
                    this.setState({redirect: "/sign-in"})
                }
                else window.alert("Error")
            })
    }

    UserChangeHandler=(event)=>{
        this.address=event.target.value;
    }

    PassChangeHandler=(event)=>{
        this.password=event.target.value;
    }
    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
                    <form onSubmit={this.RegistrationCall}>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onChange={this.UserChangeHandler} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={this.PassChangeHandler} className="form-control" placeholder="Enter password" />
                        </div>

                        <button id="RegistrationButton" type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/sign-in">sign in?</a>
                        </p>
                    </form>

        );
    }
}