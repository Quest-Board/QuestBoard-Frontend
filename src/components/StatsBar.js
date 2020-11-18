import React, { Component } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class StatBar extends Component {

    constructor(props){
        super(props);
        this.state = {rank:"King", xp:851}
    }
    

    async componentDidMount(){
        await this.update();
    }

    async update(){
        //event.preventDefault();
        //TODO
        console.log("in update")
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
                this.setState({xp: data.points % 1000});
                switch(data.rank){
                    case 0:
                        this.setState({rank: "Squire"});
                        break;
                    case 1:
                        this.setState({rank: "Knight"});
                        break;
                    case 2:
                        this.setState({rank: "King"});
                        break;
                    default:
                        this.setState({rank: "Squire"});
                        break;
                }
          })
    }


    render() {
        return (
            <div className="stats-bar-wrapper">
                <div id="statsBar" className="stats-bar">
                    <div style={{display: "flex"}}>
                        <img src={require("../images/" + this.state.rank + ".png")} alt={this.state.rank} style={{width:40, alignSelf:"center"}}></img>
                        <h3 style={{alignSelf:"center"}}>{this.state.rank}</h3>
                    </div>
                    <div style={{paddingTop:5}}>
                        <ProgressBar label={`${this.state.xp / 10}%`} now={this.state.xp / 10} />
                    </div>
                </div>
            </div>
            
        );
    }
}
