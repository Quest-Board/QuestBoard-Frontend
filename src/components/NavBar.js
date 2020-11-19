import React, { Component } from "react";
import {Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/User/Board"}>QuestBoard</Link>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/User/Board"}>My Boards</Link>
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
        );
    }
}
