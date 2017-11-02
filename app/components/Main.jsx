// Include the Main React Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// We need to include all of the components we"re utilizing
// import Navbar from "./components/Navbar";
// import Jumbotron from "./children/Jumbotron";
import Home from './Home/Home.jsx';
import Search from "./children/Search.jsx";
import Results from './children/Results.jsx';
import Saved from './children/Saved.jsx';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container-fluid nopadding">

        {/* React Router Switch Statement */}
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route path='/results' component= { Results } />
          <Route component = { Home } />
        </Switch>

      </div>
    );
  }
};