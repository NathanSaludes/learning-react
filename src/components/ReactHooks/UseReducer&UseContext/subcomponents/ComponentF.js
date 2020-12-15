import React, { useContext } from 'react'
import { CountContext } from '../Demo';

function ComponentF() {

	const countContext = useContext(CountContext);
	const { dispatch, ACTION_TYPES } = countContext;

	return (
		<div className="component">
			<span>Component F</span><br/><br/>
			<button onClick={() => dispatch(ACTION_TYPES.INCREMENT)}>Increment</button>
			<button onClick={() => dispatch(ACTION_TYPES.DECREMENT)}>Decrement</button>
			<button onClick={() => dispatch(ACTION_TYPES.RESET)}>Reset</button>
		</div>
	)
}

export default ComponentF
