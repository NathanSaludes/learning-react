import React, { useReducer } from 'react'
import styles from './Demo.module.scss'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const CountContext = React.createContext(0);

/* Good Practice - action types as a constant. Don't pass action types as string as such method is prone to
typographical errors */
const ACTION_TYPES = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	RESET: 'RESET'
}

const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case ACTION_TYPES.INCREMENT:
			return state + 1;
		case ACTION_TYPES.DECREMENT:
			return state - 1;
		case ACTION_TYPES.RESET:
			return initialState;
		default:
			return state
	}
}

function Demo() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<CountContext.Provider value={{ count, dispatch, ACTION_TYPES }}>
			<div className={styles.component}>
				<h1>Global Count: {count}</h1>
				<div className={styles.subComponentWrapper}>
					<ComponentA />
					<ComponentB />
					<ComponentC />
				</div>
			</div>
		</CountContext.Provider>
	)
}

export default Demo
