import React, { Component } from 'react'

import ComponentA from './ComponentA'
import { UserProvider } from './UserContext'

class ContextAPIDemo extends Component {
	render() {
		return (
			<UserProvider value='Nathaniel Saludes'>
				<ComponentA />
			</UserProvider>
		)
	}
}

export default ContextAPIDemo
