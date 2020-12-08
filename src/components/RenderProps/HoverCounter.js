import React from 'react';

class HoverCounter extends React.Component {
	render() {
		const { count, incrementCount } = this.props;
		return (
			<h1 onMouseEnter={incrementCount}>Hovered {count} times</h1>
		)
	}
}

export default HoverCounter;