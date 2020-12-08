import React, { Component } from 'react'

class StatefulComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div className="component">
				<h1>Stateful Component</h1>
				<p>It is {this.state.date.toLocaleTimeString()}</p>
			</div>
		)
	}
}

export default StatefulComponent;