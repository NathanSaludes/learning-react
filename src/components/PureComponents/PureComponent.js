import React, { PureComponent } from 'react'

export class PureComponentDemo extends PureComponent {
	render() {
		console.log('%cPure Component Rendered!', 'color: red');
		return (
			<p className="component"><b>Pure Component {this.props.time}</b></p>
		)
	}
}

export default PureComponentDemo
