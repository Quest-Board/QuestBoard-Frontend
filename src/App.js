import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/Registration";
import MainMenu from "./pages/MainMenu";

import Board from "./pages/Board";
import BoardJoin from "./pages/BoardJoin";
import BoardCreation from "./pages/BoardCreation";
import Columns from "./components/Columns";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/User/Board" component={Board} />
                <Route path="/User/JoinBoard" component={BoardJoin} />
                <Route path="/User/CreateBoard" component={BoardCreation} />
                <Route path="/User/Columns" component={Columns}/>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <Link className="navbar-brand" to={"/sign-in"}>QuestBoard</Link>
                            <div className="collapse navbar-collapse" id="navbarToggler">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-in"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={Login} />
                                <Route path="/sign-in" component={Login} />
                                <Route path="/sign-up" component={SignUp} />
                                <Route path="/menu" component={MainMenu} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Switch>
    </Router>
    );
}

export default App;