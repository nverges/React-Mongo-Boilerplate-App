import React, { Component } from 'react';

export default class About extends Component {
	constructor(props) {
		super(props) 

		this.state = {
			title: "About Us"
		}
	}

	render() {
		return (

			<div className="panel panel-default" id="section-about">
			  <div className="panel-heading">
			    <h3 className="panel-title">{this.state.title}</h3>
			  </div>
			  <div className="panel-body">
			    This is the About Section
			  </div>
			</div>


		)
	}
}