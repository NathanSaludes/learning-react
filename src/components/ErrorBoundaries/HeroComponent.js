import React, { Component } from 'react'
import HeroName from './HeroName'

export class HeroComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true
		}
	}

	componentDidCatch(error, info) {
		console.log(info);
	}

	render() {
		if (this.state.hasError) {
			return <HeroName alias="(unknown)" />
		}

		return <HeroName alias={this.props.name} />;
	}
}

export default HeroComponent
