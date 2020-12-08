import React, { Component } from 'react'

export class RegularComponent extends Component {
	render() {
		console.log('%cRegular Component Rendered!', 'color: blue')
		return (
			<p className="component"><b>Regular Component</b></p>
		)
	}
}

export default RegularComponent
