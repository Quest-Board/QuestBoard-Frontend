import React, { Component } from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import BoardCreation from "./BoardCreation";
import BoardJoin from "./BoardJoin";

//import Item from '../components/Item'

export default class Board extends Component {
    list = ['Item 1', 'Item 2', 'Item 3']

    render() {
        return (
            <div className="Board">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/User/Board"}>QuestBoard</Link>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/User/Board"}>My Board</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/User/CreateBoard"}>Create Board</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/User/JoinBoard"}>Join Board</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="board-wrapper">
                    <div className="board">
                        <p>Hello World</p>
                    </div>
                </div>
            </div>
        );
    }
}
