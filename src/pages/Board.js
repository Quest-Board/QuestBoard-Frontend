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
        this.state={redirect:null,lanes:[]};
        console.log("beforeResponse1");
        const response1=this.postData("https://coms-319-t15.cs.iastate.edu/api/board/getboards")
        console.log(response1.valueOf());
    }

    async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
        }).then(response => {
            if (!response.ok){
                alert("Error creating board")
            }
            return response.json();
        })
            .then(data => {
                console.log(data);
                return data;
            });
        //console.log(response.json());
        return response; // parses JSON response into native JavaScript objects
    }

    //Board Handler Functions:
    onCardMoveAcrossLane(fromLaneId,toLaneId,cardId,index) {
        if (toLaneId === "Completed" || toLaneId === "completed") {
            //TODO send API call to add points
        }
        //TODO send api call to move columns.
    }

    onCardAdd(card,laneId){
        //TODO api call to add card to laneId lane
    }
    onCardDelete(cardId,laneId){
        //TODO api call to remove card from laneId lane
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

