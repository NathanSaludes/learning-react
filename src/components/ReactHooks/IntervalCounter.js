import React, { useEffect, useState } from 'react'

function IntervalCounter(props) {

	const [count, setCount] = useState(0)

	const tick = () => {
		setCount(prevCount => prevCount + 1)
	}

	const checkCount = () => {
		console.log(count);
	}

	useEffect(() => {
		let clock = setInterval(tick, 1000);

		return (() => {
			console.log('clean up executed');
			clearInterval(clock)
		})

	}, [])

	return (
		<div className="component">
			<p>count: {count}</p>
			<button onClick={checkCount}>check count</button>
		</div>
	)
}

export default IntervalCounter