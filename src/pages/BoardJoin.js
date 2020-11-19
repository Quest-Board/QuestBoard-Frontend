import React, { Component } from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import NavBar from "../components/NavBar"

export default class BoardJoin extends Component {


    render() {
        return (
            <div className="Board">
                <NavBar />
                <div className="board-wrapper">
                    <div className="auth-inner">
                        <form>
                            <h3>Join Board</h3>
                            <div className="form-group">
                                <label>Board Code</label>
                                <input type="text" className="form-control" placeholder="Enter Board Join Code"/>
                            </div>
                            <button id="JoinBoardButton" type="submit" className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}