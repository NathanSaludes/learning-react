import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponentDemo from './PureComponent'

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
			console.log(`%cPure Components Demo Finished!`, 'color: red');
		}, 15000)
	}

	/* --------------------------------------------------------------------
	Regular components re-renders everytime the state is updated (setState() 
	is invoked). On the other hand, Pure Components only re-renders when 
	there is a concrete difference in state or props. It uses a strategy called 
	"Shallow Comparison"	which checks if there is a difference in the component's 
	props or state in terms of its value or type when the state gets updated.

	example:
	
	props -> { p1: 12 } 		-- changes into --> { p1: 12 } 		(no re-render)
	state -> { s1: 'test' } -- changes into --> { s1: 'test' }	(no re-render)

	props -> { p1: 12 }		-- changes into --> { p1: 15 }		(re-renders)
	state -> { s1: "10" } 	-- changes into --> { s1: 10 }		(re-renders)
	-------------------------------------------------------------------- */

	render() {
		console.log('Parent Component Rendered ---------------------------');
		return (
			<div className="component">
				<p>{this.state.title}</p>
				<RegularComponent />
				<PureComponentDemo />
			</div>
		)
	}
}
