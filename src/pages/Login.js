import React, { Component } from "react";
import {Redirect} from "react-router-dom";

export default class Login extends Component {
    password;
    address;

    constructor(props){
        super(props);
        this.state={redirect:null};
    }

    //send login attempt with no body, will return ok if the 
    //user has a valid cookie from the last login
    CheckForCookie=()=> {
        fetch('https://coms-319-t15.cs.iastate.edu/api/board/create?boardname=testBoard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
          })
          .then((response) => {
            if (response.ok){
                this.setState({redirect: "/User/Board"})
            }
          })
    }

    componentDidMount() {
        this.CheckForCookie();
    }

    LoginCall=(event)=>{
        event.preventDefault();
        return fetch('https://coms-319-t15.cs.iastate.edu/api/account/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.address,
              password: this.password
            })
          })
          .then((response) => {
            if (response.ok){
                console.log("ok");
                this.setState({redirect: "/User/Board"})
            }
            else window.alert("Username or password is incorrect.")
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