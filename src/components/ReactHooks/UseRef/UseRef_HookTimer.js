import { useRef, useEffect, useState } from 'react'

function HookTimer() {

	const [timer, setTimer] = useState(0);
	const interval = useRef();

	useEffect(() => {
		interval.current = setInterval(() => {
			setTimer(currentTimer => currentTimer + 1);
		}, 1000)

		return (() => {
			clearInterval(interval.current);
		})

	}, [])

	return (
		<div className="component">
			<p>Timer - {timer}</p>
			<button onClick={() => clearInterval(interval.current)}>Clear Timer</button>
		</div>
	)
}

export default HookTimer