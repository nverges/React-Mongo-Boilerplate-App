// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// We need to include all of the components we"re utilizing
// import Navbar from "./components/Navbar";
// import Jumbotron from "./children/Jumbotron";
import Search from "../children/Search.jsx";
import Results from '../children/Results.jsx';
import Saved from '../children/Saved.jsx';
import Navbar from './Navbar.jsx';

const helpers= require('../utils/helpers');

class Home extends React.Component {

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  constructor (props) {
    super(props) 
      this.state = {
        results: [], 
        history: []
      }
  }

  // The moment the page renders get the History
  componentDidMount() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  }

  handleResults(results) {
    this.setState({
      results: results
    }, () => {
      console.log("HERE")
      console.log(this.state.results)
    })
  }

  render () {
      return (
          <div>

            <Navbar />

            <div className="container">

                {/* Jumbotron */}
                <div className="jumbotron">
                    <h1 className="display-3">React Boilerplate App NYT Search</h1>
                    <p className="lead">Boilerplate App Built with Node, Express, React and MongoDB</p>
                    <p className="lead">
                      <a className="btn btn-primary btn-lg" href="#" role="button">Button</a>
                    </p>
                </div>

                {/* Render Components */}

                <Search  runQuery={helpers.runQuery.bind(this, this.handleResults.bind(this))}/>
                <Results results={this.state.results} />
                <Saved history={this.state.history} />

            </div>
        </div>
      )
  }

};

Home.displayName = "Home";

export default Home;
