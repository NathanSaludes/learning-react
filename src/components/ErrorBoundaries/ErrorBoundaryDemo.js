import React, { Component } from 'react'
import HeroComponent from './HeroComponent'

export class ErrorBoundaryDemo extends Component {
	constructor(props) {
		super(props)

		this.state = {
			heroNames: ['Ironman', 'Captain America', 'Thanos']
		}
	}

	render() {

		const heroesListJSX = this.state.heroNames.map((name, index) => {
			return <HeroComponent name={name} key={index} />;
		});

		return (
			<div className="component">
				<h1>Heroes:</h1>
				{heroesListJSX}
			</div>
		)
	}
}

export default ErrorBoundaryDemo
