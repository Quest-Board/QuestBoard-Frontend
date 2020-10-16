/*App.js*/
import React, { Component } from "react";
import "./App.css";
//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
//Pages
import MainPage from "./pages";
import RegistrationPage from "./pages/Registration";
import LoginPage from "./pages/Login";
class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/Login" component={LoginPage} />
                <Route path="/Registration" component={RegistrationPage} />
                <Route path="/" component={MainPage} />
            </Switch>
          {/*All our Routes goes here!*/}

        </Router>
    );
  }
}

export default App;
