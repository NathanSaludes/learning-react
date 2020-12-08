import React, { Component } from 'react'
import MemoDemo from './Memo';
import RegularFuncComponent from './RegularFuncComponent';

export default class Parent extends Component {

	constructor(props) {
		super(props)

		this.state = {
			title: 'Parent Component',
			time: new Date().toLocaleTimeString()
		}
	}


	componentDidMount() {
		let newTime;
		const tick = setInterval(() => {
			this.setState((prevState) => {
				newTime = new Date().toLocaleTimeString();
				return {
					time: newTime,
					title: `Parent Component (${newTime})`
				}
			})
		}, 3000);

		setTimeout(() => {
			clearInterval(tick);
			console.log(`%cMemo Components Demo Finished!`, 'color: red');
		}, 15000)
	}

	render() {
		console.log('Parent Component Rendered ---------------------------');
		return (
			<div className="component">
				<p>{this.state.title}</p>
				<RegularFuncComponent />
				<MemoDemo />
			</div>
		)
	}
}
