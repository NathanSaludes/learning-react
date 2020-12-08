import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
	render() {
		return (
			<div className="component">
			<UserConsumer>
				{(name) => {
					return <span>Hello {name}</span>
				}}
			</UserConsumer>
			</div>
		)
	}
}

export default ComponentC
