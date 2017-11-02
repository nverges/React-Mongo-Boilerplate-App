var React = require("react");

import _ from "lodash";
import ResultsRow from './resultsRow.jsx';

class Results extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Search Results",
      buttonStatus: "Save"
    }
  }

  componentShouldUpdate() {
    if (!props.saved) {

    }
  }


  renderResults() {
    return _.map(this.props.results, (data, index) => {
      return (

        <ResultsRow 

          saved={true} 
          title={data.headline.main} 
          article_id={data._id}
          url={data.web_url}
          date={data.pub_date}
          snippet={data.snippet}
          key={data._id} 

        />
    
      )
    });
  };

  render() {
    return (
      <div className="card">
      <div className="card-header card-success">{this.state.title}</div>
      
        <div className="card-block">
          {this.renderResults()}
        </div>
      </div>

    );
  }
};

Results.displayName = "Results";

export default Results;
