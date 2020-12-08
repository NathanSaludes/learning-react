import React, { useEffect, useState } from 'react'

function CursorPositionComponent() {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	const setCursorCoordinates = (e) => {
		setPosition(() => {
			return {
				x: e.clientX,
				y: e.clientY
			}
		});
	}

	useEffect(() => {
		window.addEventListener('mousemove', setCursorCoordinates)
		console.log('%cevent listener ATTACHED!', 'color: green')

		/* --------------------------------------------------------------------------------------------------------
		The useEffect hook returns a function known as the "clean up" function which acts like the lifecycle method
		'componentWillUnmount' in class components which is triggered when a component is detached from the DOM
		-------------------------------------------------------------------------------------------------------- */
		return (() => {
			window.removeEventListener('mousemove', setCursorCoordinates)
			console.log('%cevent listener DETACHED!', 'color: red')
		})

	}, [])

	return (
		<p className="component">Mouse Position: (x: {position.x}, y: {position.y})</p>
	)
}

// Main Component --------------------------------------------------------------------------------------
function UseEffect_CleanUp() {

	const [display, setDisplay] = useState(true)

	const toggleDisplay = () => {
		setDisplay(!display);
	}

	return (
		<div className="component">
			<button onClick={toggleDisplay}>{display ? "Hide" : "Show"} Cursor Position</button>
			{ display ? <CursorPositionComponent /> : null}
		</div>
	)
}

export default UseEffect_CleanUp
