import React, { Component } from "react";
import {Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    Selection(){
        let list=[];
        for(let i=0;i<data.length;i++){
            list.push(<ReactBootstrap.Dropdown.Item>{data[i].name}</ReactBootstrap.Dropdown.Item>);
        }
        return list;
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/User/Board"}>QuestBoard</Link>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <ReactBootstrap.Dropdown>
                                    <ReactBootstrap.Dropdown.Menu>
                                        {this.Selection()}
                                    </ReactBootstrap.Dropdown.Menu>
                                </ReactBootstrap.Dropdown>
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
