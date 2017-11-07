var React = require("react");

import ResultsRow from "./resultsRow.jsx";

class Saved extends React.Component {

  constructor(props) {
      super(props) 
        this.state = {
        title: "Saved Articles",
        buttonStatus: "Delete"
      }
  }

  renderHistory() {
    return _.map(this.props.history, (data, index) => {

      return (

        <ResultsRow 

          saved={false} 
          article_id={data.article_id}
          title={data.title}
          date={data.date}
          url={data.url}
          snippet={data.snippet}
          key={data._id} 
          _id={data._id}
        />

      )
    });
  };
  
  render() {
    return (
      <div className="card">

        <div className="card-header card-default">{this.state.title}</div>

          <div className="card-block">
            {this.renderHistory()}
          </div>

      </div>
    );
  }
};

Saved.displayName = "Saved";

export default Saved;
