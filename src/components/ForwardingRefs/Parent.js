import React, { Component } from 'react'
import Input from './Input';

export class Parent extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef(); // [1] Wrapper/Parent component creates a ref
	}

	focusInput = () => {
		if (this.inputRef) {
			this.inputRef.current.focus();
		}
	}

	render() {
		return (
			<div className="component">
				{/* [2] Wrapper/Parent component attaches ref to its child component instance */}
				<Input ref={this.inputRef} /><br />
				<button onClick={this.focusInput}>Focus Input</button>
			</div>
		)
	}
}

export default Parent
