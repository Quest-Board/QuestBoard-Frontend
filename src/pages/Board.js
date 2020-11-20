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
        this.state={redirect:null,boardsInfo:[{lanes:[
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: false},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
                    ]
                },
                {
                    id: 'lane2',
                    title: 'Completed',
                    label: '0/0',
                    cards: []
                }
            ]}]};
        console.log("beforeResponse1");
        this.componentUpdate();
    }

    async componentUpdate(){
        const response1= await this.postData("https://coms-319-t15.cs.iastate.edu/api/board/getboards")
        const json=await response1.json();
        this.setState({boardsInfo:await json});
    }

    async postData(url = '') {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            redirect: 'follow'
        })
        return response;
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
                <NavBar boardsInfo={this.state.boardsInfo}/>
                <div className="board-wrapper">
                    <div id="Board" className="board">
                        <Board
                            editable
                            style={{height:"100%", background: "#ffffff"}}
                            canAddLanes
                            editLaneTitle
                            data={this.state.boardsInfo[0]}/>
                    </div>
                </div>
                <StatsBar />
            </div>
        );
    }
}

