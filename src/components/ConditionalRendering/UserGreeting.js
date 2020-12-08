import React, { Component } from 'react'

export class UserGreeting extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoggedIn: false
		}
	}

	render() {
		return (
			<div>Hello {this.state.isLoggedIn ? 'Nathan' : 'Guest'}</div>
		)
	}
}

export default UserGreeting
