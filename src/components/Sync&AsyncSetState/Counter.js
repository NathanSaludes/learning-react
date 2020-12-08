import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 0
		}
	}

	incrementValue(renderCount) {

		/*--------------------------------------------------------------
		this type of update state uses the current value
		--------------------------------------------------------------*/
		this.setState({
			value: this.state.value + 1
		});

		/*--------------------------------------------------------------
		To update the state based on its previous value,
		pass a function instead of a plain object as the first argument 
		to the setState method and the first parameter refers to the 
		previous state of this component 
		--------------------------------------------------------------*/
		this.setState((prevState, props) => ({
			value: prevState.value + 1
		}));
	}

	incrementFive() {
		/*--------------------------------------------------------------
		by default, React may groups a set of setState calls into a
		single batch of update for performance purposes.
		--------------------------------------------------------------*/
		this.incrementValue();
		this.incrementValue();
		this.incrementValue();
		this.incrementValue();
		this.incrementValue();
	}

	render() {
		return (
			<div className="counter-component">
				<div id="counter-value">Counter: {this.state.value}</div>
				<button id="counter-button-increment" onClick={() => this.incrementFive()}>Increment</button>
			</div>
		)
	}
}

export default Counter;