import React, { Component } from "react";
import {Link } from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
import Board from "../pages/Board";
export default class NavBar extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    Selection(){
        let list=[];
        for(let i=0;i<this.props.boardsInfo.length;i++){
            list.push(<ReactBootstrap.Dropdown.Item onClick={(e)=>this.props.clickHandle(i,e)}>{this.props.boardsInfo[i].name}</ReactBootstrap.Dropdown.Item>);
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
                                    <ReactBootstrap.Dropdown.Toggle className="nav-link" style={{background:"#ffffff"}}>Boards</ReactBootstrap.Dropdown.Toggle>
                                    <ReactBootstrap.Dropdown.Menu>
                                        {this.Selection()}
                                    </ReactBootstrap.Dropdown.Menu>
                                </ReactBootstrap.Dropdown>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname:"/User/CreateBoard",boardsInfo:this.props.boardsInfo, clickHandle:this.props.clickHandle}}>Create Board</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={{pathname:"/User/JoinBoard",boardsInfo:this.props.boardsInfo, clickHandle:this.props.clickHandle}}>Join Board</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
