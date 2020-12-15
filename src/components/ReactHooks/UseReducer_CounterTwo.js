import { useReducer } from "react";

const initialState = {
	firstCounter: 0,
	secondCounter: 0
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { ...state, firstCounter: state.firstCounter + action.value };
		case 'decrement':
			return { ...state, firstCounter: state.firstCounter - action.value };
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value };
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value };
		case 'reset':
			return initialState;
		default:
			break;
	}
}

function CounterTwoUseReducer() {
	const [count, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<div>
				<p>Counter: {count.firstCounter}</p>
				<button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
				<button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
			</div>

			<div>
				<p>Counter: {count.secondCounter}</p>
				<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment</button>
				<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement</button>
			</div>
			
			<br /><br />
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</div>
	)
}

export default CounterTwoUseReducer;