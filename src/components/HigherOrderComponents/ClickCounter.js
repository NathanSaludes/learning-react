import React from 'react';
import withCounter from './withCounter';

class ClickCounter extends React.Component {
	render() {
		const { incrementCounter, counterValue } = this.props;
		return <button onClick={incrementCounter}>Clicked {counterValue} Times</button>
	}
}

export default withCounter(ClickCounter, 5);