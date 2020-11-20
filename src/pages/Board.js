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
        this.state={redirect:null,index:0,boardsInfo:[{lanes:[
                {
                    id: 'lane1',
                    title: 'Planned Tasks',
                    label: '2/2',
                    cards: [
                        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true},
                        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', draggable: true, metadata: {sha: 'be312a1'}}
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
            redirect: 'follow',

        })
        return response;
    }

    //Board Handler Functions:
    onCardMoveAcrossLanes= async (fromLaneId, toLaneId, cardId, index)=>{
        console.log("move card");

        let lastLaneId = this.state.boardsInfo[this.state.index].lanes[this.state.boardsInfo[this.state.index].lanes.length -1].id;

        //add or remove points for cards moved to or from the last (furthest right) lane
        if ( toLaneId === lastLaneId || toLaneId === lastLaneId) {
            //TODO send API call to add points
            const response = await fetch("https://coms-319-t15.cs.iastate.edu/api/points/add", {
                method: 'POST', 
                mode: 'cors', 
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    points:20
                }) 
              });
        }else if(fromLaneId === lastLaneId || fromLaneId === lastLaneId){
            //TODO send API call to subtract points
        }
        
        StatsBar.update();
    }

    onCardAdd= (card,laneId)=>{
        console.log(this.state.boardsInfo);
        console.log(this.state.index);
        //api call to add card to laneId lane
        return fetch("https://coms-319-t15.cs.iastate.edu/api/board/addcardtocolumn", {
                method: 'POST', 
                mode: 'cors', 
                credentials: 'same-origin',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                body: JSON.stringify({
                    BoardID: parseInt(this.state.boardsInfo[this.state.index].id, 10),
                    ColumnID: parseInt(laneId, 10),
                    Title:card.title,
                    Description:card.description,
                    AssigneeEmail:"Null@Null.com"
                })
              });
    }
    onCardDelete(cardId,laneId){
        //TODO api call to remove card from laneId lane
    }
    ChangeBoard=(id,e)=>{
        e.preventDefault();
        this.setState({index:id});
    }


    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }

        return (
            <div className="Board">
                <NavBar clickHandle={this.ChangeBoard} boardsInfo={this.state.boardsInfo}/>
                <div className="board-wrapper">
                    <div id="Board" className="board">
                        <Board
                            editable
                            style={{height:"100%", background: "#ffffff"}}
                            canAddLanes
                            onCardAdd={this.onCardAdd}
                            onCardMoveAcrossLanes={this.onCardMoveAcrossLanes}
                            onCardDelete={this.onCardDelete}
                            editLaneTitle
                            data={this.state.boardsInfo[this.state.index]}/>
                    </div>
                </div>
                <StatsBar />
            </div>
        );
    }
}

