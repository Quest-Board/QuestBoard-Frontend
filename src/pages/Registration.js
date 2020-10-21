import React, { Component } from "react";
import {Redirect} from "react-router-dom";

export default class SignUp extends Component {

    password;
    address;

    constructor(props){
        super(props);
        this.state={redirect:null};
    }
    RegistrationCall=(event)=>{
        event.preventDefault();
        const Http = new XMLHttpRequest();
        const url='https://jsonplaceholder.typcode.com/posts';//TODO replace this URL with the server URL.
        const data={
            email: this.address,
            password: this.password
        }

        Http.open("POST",url);
        Http.send(JSON.stringify(data));

        //TODO on successful response, redirect to login page.
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

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}