import React from 'react';
import withCounter from './withCounter';

class HoverCounter extends React.Component {
	render() {
		const { incrementCounter, counterValue } = this.props;
		return <h2 onMouseEnter={incrementCounter}>Hovered {counterValue} times.</h2>
	}
}

export default withCounter(HoverCounter, 2);