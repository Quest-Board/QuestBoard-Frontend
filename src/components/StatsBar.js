import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class StatBar extends Component {

    rank = "Squire";
    xp = 0;

    async update(){
        //event.preventDefault();
        //TODO
        await fetch('https://coms-319-t15.cs.iastate.edu/api/account/stats', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
          })
          .then(response => {
              if (!response.ok){
                alert("Error getting stats")
              }
              return response.json();
            })
          .then(data => {
                this.xp = data.points % 1000;
                switch(data.rank){
                    case 0:
                        this.rank = "Squire";
                        break;
                    case 1:
                        this.rank = "Knight";
                        break;
                    case 2:
                        this.rank = "King";
                        break;
                }
          })
    }


    render() {
        this.update();
        return (
            <div className="stats-bar-wrapper">
                <div id="statsBar" className="stats-bar">
                    <div style={{display: "flex"}}>
                        <img src={require("../images/" + this.rank + ".png")} alt={this.rank} style={{width:40, alignSelf:"center"}}></img>
                        <h3 style={{alignSelf:"center"}}>{this.rank}</h3>
                    </div>
                    <div style={{paddingTop:5}}>
                        <ProgressBar label={`${this.xp / 10}%`} now={this.xp / 10} />
                    </div>
                </div>
            </div>
            
        );
    }
}
