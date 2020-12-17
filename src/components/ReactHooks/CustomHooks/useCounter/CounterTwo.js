import useCounter from "./useCounter";

function CounterTwo() {
	const [value, increment, decrement, reset] = useCounter(10, 10);
	return (
		<div>
			<h2>Counter Two = {value}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterTwo;