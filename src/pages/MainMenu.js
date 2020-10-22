import React, { Component } from "react";

import {Redirect} from "react-router-dom"

export default class MainMenu extends Component {

    constructor(props){
        super(props);
        this.state={redirect:null};
    }

    //TODO: update menu redirects once pages have been created
    BoardRedirect=(event)=>{ event.preventDefault(); this.setState({redirect: "/sign-in"});}
    BoardCreationRedirect=(event)=>{ event.preventDefault(); this.setState({redirect: "/sign-in"});}
    JoinBoardRedirect=(event)=>{ event.preventDefault(); this.setState({redirect: "/sign-in"});}


    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <form>
                <h3>Main Menu</h3>

                <button style={{marginBottom:20, marginTop:20}} type="submit" className="btn btn-primary btn-block" 
                    onClick={this.BoardCreationRedirect} >Create New Quest Board</button>
                
                <button style={{marginBottom:20, marginTop:20}} type="submit" className="btn btn-primary btn-block"
                    onClick={this.BoardRedirect} >View My Quest Boards</button>
                
                <button style={{marginBottom:20, marginTop:20}} type="submit" className="btn btn-primary btn-block"
                    onClick={this.JoinBoardRedirect} >Join a Quest Board</button>

            </form>
        );
    }
}