// Include the Main React Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// We need to include all of the components we"re utilizing
// import Navbar from "./components/Navbar";
// import Jumbotron from "./children/Jumbotron";
import Home from './Home';
import Search from "./children/Search";
import Results from './children/Results';
import Saved from './children/Saved';

import helpers from './utils/helpers';

export default class Main extends { Component } {
  render() {
    return (
      <div className="container-fluid nopadding">

        {/* React Router Switch Statement */}
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route path='/login' component= { Login } />
          <Route component = { Home } />
        </Switch>

        {/* Renders the "Search" component */}
        <Search />

      </div>
    )
  }
}