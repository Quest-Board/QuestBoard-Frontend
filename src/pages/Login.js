import React, { Component } from "react";
import {Redirect} from "react-router-dom";

export default class Login extends Component {
    password;
    address;

    constructor(props){
        super(props);
        this.state={redirect:null};
    }
    LoginCall=(event)=>{
        event.preventDefault();
        const Http = new XMLHttpRequest();
        const url="/api/auth/login";//TODO replace this URL with the server URL.
        const data={
            email: this.address,
            password: this.password
        }

        Http.open("POST",url);
        Http.send(JSON.stringify(data));
        //TODO remove this if statement and replace with one corresponding to HTTP response.
        if(this.address==="Test@Test.com"&&this.password==="TestPass1"){
            this.setState({redirect: "/User/Board"});
        }
        else{
            alert("Password or Username is incorrect");
        }

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
            <form onSubmit={this.LoginCall}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.UserChangeHandler} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.PassChangeHandler} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}