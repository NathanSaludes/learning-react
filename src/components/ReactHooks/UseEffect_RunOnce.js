import React, { useEffect, useState } from 'react'

function UseEffect_RunOnce() {

	const initialCursorPosition = {
		x: 0,
		y: 0,
	}

	const [position, setPosition] = useState(initialCursorPosition)

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
		console.log('event listener attached!')
	}, [])

	return (
		<div>
			Mouse Position: (x: {position.x}, y: {position.y})
		</div>
	)
}

export default UseEffect_RunOnce
