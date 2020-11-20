import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import { ReactMultiEmail, isEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
import NavBar from '../components/NavBar'

//import icons
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export default class BoardCreation extends Component {

    boardName;
    invites;
    boardID;

    constructor(props){
        super(props);
        
        this.addClick = this.addClick.bind(this);
        this.removeClick = this.removeClick.bind(this);

        this.state = {
            redirect:null,
            emails: [],
            columns: ['']
        };
    }

    CreationCall= async (event)=>{
        event.preventDefault();
        //board name
        await fetch('https://coms-319-t15.cs.iastate.edu/api/board/create?boardname=' + this.boardName, {
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

        //columns
        for(const column of this.state.columns){
            await fetch('https://coms-319-t15.cs.iastate.edu/api/board/addcolumn', {
                method: 'POST',
                body: JSON.stringify({
                    category: column,
                    boardID: this.boardID
                    }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                })
                .then((response) => {
                if (!response.ok){
                    alert("Error creating column '" + column + "'")
                    return
                }
                })
        }
    
        //TODO:send emails with invites
        //invites
        for(const email of this.state.emails){
            await fetch('https://coms-319-t15.cs.iastate.edu/api/board/addmember/' + this.boardID, {
            method: 'POST',
            body: JSON.stringify({
                email: email
                }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
            .then((response) => {
            if (!response.ok){
                alert("Error adding member " + email)
                return
            }
            })
        }
        this.setState({redirect: "/User/Board"})
    }

    BoardNameChangeHandler=(event)=>{
        this.boardName=event.target.value;
    }

    createColumnEntry(){
        return this.state.columns.map((el, i) => 
            <div key={i} style={{paddingLeft: 30}}>
                <label>Column {i + 1}</label>
                <div style={{display: "block"}}>
                    <input type="text" className="form-control" value={el||''} placeholder="Name" 
                        onChange={this.handleChange.bind(this, i)}
                        style={{width: "90%", display: "inline"}}/>
                        <button type="button" className="btn" value='remove' onClick={this.removeClick.bind(this, i)}><RemoveIcon /></button>
                    </div>
            </div>          
        )
    }

    handleChange(i, event) {
        let columns = [...this.state.columns];
        columns[i] = event.target.value;
        this.setState({ columns });
    }
     
    addClick(){
        this.setState(prevState => ({ columns: [...prevState.columns, '']}))
    }
     
    removeClick(i){
        if(this.state.columns.length > 1){
            let columns = [...this.state.columns];
            columns.splice(i,1);
            this.setState({ columns });
        }
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect}/>
        }
        const { emails } = this.state;

        return (
            <div className="Board">
                <NavBar />
                <div className="menu-wrapper">
                    <div className="menu" style={{overflowY: "auto"}}>
                        <form onSubmit={this.CreationCall}>
                            <h3>Create Board</h3>
                            <div className="form-group">
                                <label>Board Name</label>
                                <input type="text" id="boardName" className="form-control" placeholder="Name" onChange={this.BoardNameChangeHandler}/>

                                <label style={{paddingTop: 15, paddingLeft: 0}}>Board Columns</label>
                                <button type="button" className="btn" value='add' onClick={this.addClick.bind(this)}><AddIcon /></button>
                

                                {this.createColumnEntry()}

                                <label>Invite others</label>

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