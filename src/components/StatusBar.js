import { ThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class StatusBar extends Component {

    rank = "King";
    xp;

    update = async (event)=>{
        event.preventDefault();
        //TODO
        await fetch('https://coms-319-t15.cs.iastate.edu/api/board/create?boardname=', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
          .then(response => {
              if (!response.ok){
                alert("Error creating board")
              }
              return response.json();
            })
          .then(data => {
                this.boardID = data.id;
          })
    }


    render() {
        return (
            <div className="status-bar-wrapper">
                <div id="StatusBar" className="status-bar">
                    <div style={{display: "flex"}}>
                        <img src={require("../images/" + this.rank + ".png")} style={{width:40, alignSelf:"center"}}></img>
                        <h3 style={{alignSelf:"center"}}>{this.rank}</h3>
                    </div>
                    <div style={{paddingTop:5}}>
                        <ProgressBar label="60%" now={60} />
                    </div>
                </div>
            </div>
            
        );
    }
}
