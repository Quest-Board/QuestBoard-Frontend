import React, { Component } from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import BoardCreation from "./BoardCreation";
import BoardJoin from "./BoardJoin";

//import Item from '../components/Item'
import Columns from "../components/Columns";
import MainMenu from "./MainMenu";
import StatsBar from "../components/StatsBar"
import NavBar from "../components/NavBar"
export default class Board extends Component {
    list = ['Item 1', 'Item 2', 'Item 3']
    constructor(props){
        super(props);
        this.state={redirect:null};
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div className="Board">
                <NavBar />
                <div className="board-wrapper">
                    <div id="Board" className="board">
                            <Columns/>
                    </div>
                </div>
                <StatsBar />
            </div>
        );
    }
}

