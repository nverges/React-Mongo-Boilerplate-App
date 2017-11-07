// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";

// We need to include all of the components we"re utilizing
// import Navbar from "./components/Navbar";
// import Jumbotron from "./children/Jumbotron";
import Search from "../Children/Search.jsx";
import Results from '../Children/Results.jsx';
import Saved from '../Children/Saved.jsx';
import Navbar from '../Navigation/Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
// import BottomNav from '../Navigation//BottomNav.jsx'; 
import Footer from './Footer.jsx';
// import DialogSimple from '../Dialogs/Dialog.jsx';

// Cards
import Cards from '../Cards/Cards.jsx';


const helpers= require('../../../utils/helpers');

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
  };

  handleResults(results) {
    this.setState({
      results: results
    }, () => {
      console.log(this.state.results)
    });
  };

  render () {
      return (
          <div>

          <Navbar />

              <div className="container">

                  {/* Render Components */}
                  <Jumbotron />

                  {/* <Cards /> */}
                  {/* <DialogSimple /> */}
                  {<Search  runQuery={helpers.runQuery.bind(this, this.handleResults.bind(this))}/>}
                  {<Results results={this.state.results} />}
                  {<Saved history={this.state.history} />}

              </div>
          
              {/* <BottomNav /> */}
              {<Footer />}

          </div>
      );
  };

};

Home.displayName = "Home";

export default Home;
