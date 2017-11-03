import React from "react";

import helpers from '../../../utils/helpers';

class ResultsRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    renderButton() {
        if (this.props.saved === true) {
            return (
                <button type="button" className="btn btn-primary btn-sm pull-right"
                    onClick={helpers.postHistory.bind(
                    this, 
                    this.props.article_id, 
                    this.props.title, 
                    this.props.url,
                    this.props.date,
                    this.props.snippet
                    )}>Save
                </button>
            )
        } else {
            console.log("Saved: '" + this.props.title + "' in database. Article ID: " + this.props._id);
            return (
            <button type="button" className="btn btn-primary btn-sm pull-right"
                onClick={helpers.deleteHistory.bind(this, this.props._id)}>Delete
            </button>
            )
        }
    }

    render() {
        return (
        <div className="card">

            <div className="card-header">
                {this.props.title}

                <span className="text-right">
                    {this.renderButton()}
                </span> 

            </div>

            <div className="card-block">
                {this.props.snippet}
            </div>

        </div>
        )
    }
};

ResultsRow.displayName = "ResultsRow";

export default ResultsRow; 
