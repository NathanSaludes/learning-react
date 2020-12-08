import React from 'react'

/* function EventHandlingDemo() {
	function clickHandler() {
		alert('button clicked!');
		console.log(this);
	}

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
		</div>
	)
} */

function testObject(first, last, middle) {
	this.firstname = first;
	this.lastname = last;
	this.middlename = middle;
}

class EventHandlingDemo extends React.Component {

	clickHandler() {
		alert('button clicked!');
		const to = new testObject('nathaniel', 'orca', 'saludes');
		console.log(typeof to);
		console.log(to);
	}

	render() {
		return (
			<div>
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default EventHandlingDemo;