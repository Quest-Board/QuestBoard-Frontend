import React, { Component } from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from "react-router-dom";
import BoardCreation from "./BoardCreation";
import BoardJoin from "./BoardJoin";
import Board from 'react-trello';
//import Item from '../components/Item'
import StatsBar from "../components/StatsBar"
import NavBar from "../components/NavBar"
export default class QuestBoard extends Component {
    constructor(props){
        super(props);
        this.state={redirect:null,lanes:[
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                    ]
                },
                {
                    id: 'lane2',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]};
    }
    //Board Handler Functions:


    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div className="Board">
                <NavBar />
                <div className="board-wrapper">
                    <div id="Board" className="board">
                        <Board
                            editable
                            style={{height:"100%", background: "#ffffff"}}
                            canAddLanes
                            editLaneTitle
                            data={this.state}/>
                    </div>
                </div>
                <StatsBar />
            </div>
        );
    }
}

