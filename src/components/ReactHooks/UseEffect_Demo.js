import React, { useState, useEffect } from 'react'

function TitleCounter() {

	const initialCounter = 0;
	const [count, setCount] = useState(initialCounter)

	useEffect(() => {
		document.title = `You clicked the button ${count} times`
	})

	return (
		<div className="component">
			<button onClick={() => setCount(count + 1)}>I am clicked {count} times</button>
		</div>
	)

}

export default TitleCounter