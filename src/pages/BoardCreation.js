import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

export default class BoardCreation extends Component {

    boardName;
    column1Name;
    column2Name;
    column3Name;
    invites;
    boardID;

    state = {
        emails: [],
    };

    constructor(props){
        super(props);
        this.state={redirect:null};
    }

    CreationCall= async (event)=>{
        event.preventDefault();
        //board name
        await fetch('http://coms-319-t15.cs.iastate.edu/api/board/create?boardname=' + this.boardName, {
            method: 'POST',
          })
          .then((response) => {
            if (!response.ok){
                alert("Error creating board")
                return
            }
          }).then(
              (result) => {
                 this.boardID = result.ID; 
              }
          )

        //add column 1
        fetch('http://coms-319-t15.cs.iastate.edu/api/board/addcolumn', {
        method: 'POST',
        body: JSON.stringify({
            category: this.column1Name,
            boardID: this.boardID
            })
        })
        .then((response) => {
        if (!response.ok){
            alert("Error creating column 1, " + this.column1Name)
            return
        }
        })

        //add column 2
        fetch('http://coms-319-t15.cs.iastate.edu/api/board/addcolumn', {
        method: 'POST',
        body: JSON.stringify({
            category: this.column2Name,
            boardID: this.boardID
            })
        })
        .then((response) => {
        if (!response.ok){
            alert("Error creating column 2, " + this.column2Name)
            return
        }
        })

        //add column 3
        fetch('http://coms-319-t15.cs.iastate.edu/api/board/addcolumn', {
        method: 'POST',
        body: JSON.stringify({
            category: this.column3Name,
            boardID: this.boardID
            })
        })
        .then((response) => {
        if (!response.ok){
            alert("Error creating column 3, " + this.column3Name)
            return
        }
        })

        //invites
        for(const email of this.state.emails){
            fetch('http://coms-319-t15.cs.iastate.edu/api/board/addmember/' + this.boardID, {
            method: 'POST',
            body: JSON.stringify({
                email: email
                })
            })
            .then((response) => {
            if (!response.ok){
                alert("Error adding member " + email)
                return
            }
            })
        }
    }

    BoardNameChangeHandler=(event)=>{
        this.boardName=event.target.value;
    }

    Column1NameChangeHandler=(event)=>{
        this.column1Name=event.target.value;
    }
    Column2NameChangeHandler=(event)=>{
        this.column2Name=event.target.value;
    }
    Column3NameChangeHandler=(event)=>{
        this.column3Name=event.target.value;
    }

    InvitesChangeHandler=(event)=>{
        this.invites=event.target.value;
    }


    render() {
        const { emails } = this.state;

        return (
            <div className="Board">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to={"/User/Board"}>QuestBoard</Link>
                        <div className="collapse navbar-collapse" id="navbarToggler">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/User/Board"}>My Boards</Link>
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
                <div className="menu-wrapper">
                    <div className="menu">
                        <form onSubmit={this.CreationCall}>
                            <h3>Create Board</h3>
                            <div className="form-group">
                                <label>Board Name</label>
                                <input type="text" className="form-control" placeholder="Name" onChange={this.BoardNameChangeHandler}/>

                                <label>Column 1 Name</label>
                                <input type="text" className="form-control" placeholder="To Do" onChange={this.Column1NameChangeHandler}/>

                                <label>Column 2 Name</label>
                                <input type="text" className="form-control" placeholder="Doing" onChange={this.Column2NameChangeHandler}/>

                                <label>Column 3 Name</label>
                                <input type="text" className="form-control" placeholder="Done" onChange={this.Column3NameChangeHandler}/>

                                <label>Invite others</label>
                                {/*TODO make font consistent*/}
                                <ReactMultiEmail
                                    placeholder="email"
                                    emails={emails}
                                    onChange={(_emails) => {
                                        this.setState({ emails: _emails });
                                    }}
                                    validateEmail={email => {
                                        return isEmail(email); // return boolean
                                    }}
                                    getLabel={(
                                        email,
                                        index,
                                        removeEmail,
                                    ) => {
                                        return (
                                        <div data-tag key={index}>
                                            {email}
                                            <span data-tag-handle onClick={() => removeEmail(index)}>
                                            ×
                                            </span>
                                        </div>
                                        );
                                    }}
                                />

                                
                            </div>
                            <button type="submit" className="btn btn-primary btn-block" style={{width: '100%'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}