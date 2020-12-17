import { useState } from 'react'

function useCounter(initialValue = 0, step) {
	const [count, setCount] = useState(initialValue)

	const increment = () => {
		setCount(current => current + step);
	}

	const decrement = () => {
		setCount(current => current - step);
	}

	const reset = () => {
		setCount(0)
	}

	return [count, increment, decrement, reset]
}

export default useCounter
