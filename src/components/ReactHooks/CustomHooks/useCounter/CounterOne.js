import useCounter from "./useCounter";

function CounterOne() {
	const [value, increment, decrement, reset] = useCounter(2, 1);
	return (
		<div>
			<h2>Counter One = {value}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterOne;