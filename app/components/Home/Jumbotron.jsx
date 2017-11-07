import React, { Component } from 'react';

export default class Jumbotron extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Julie"
		}
	}



	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
			  <div className="container">
			    <h1 className="display-3">{this.state.name}'s Grace</h1>
			    <p className="lead">Compassionate placement service for senior care facilities</p>
			  </div>
			</div>
		)
	}

};