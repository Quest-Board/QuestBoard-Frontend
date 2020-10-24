import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";

export default class BoardCreation extends Component {





    render() {
        return (
            <div className="Board">
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
                <div className="board-wrapper">
                    <div className="board">
                        <form>
                            <h3>Create Board</h3>
                            <div className="form-group">
                                <label>Board Name</label>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}