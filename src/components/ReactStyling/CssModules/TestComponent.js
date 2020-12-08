import React from 'react';
import styles from './test.module.scss'

function TestComponent() {
	const [count, setCount] = React.useState(-1);

	const incrementCount = () => {
		setCount(currCount => currCount + 1);
	}

	const decrementCount = () => {
		if(count > 0) {
			setCount(currCount => currCount - 1);
		} else {
			setCount(0)
			alert(`Cannot set counter lower than 0.`)
		}
	}

	const resetCounter = () => {
		setCount(0)
	}

	return (
		<div className={`component ${styles.component}`}>
			<span className={styles.counterValue}>Counter Value: {count}</span>
			<div>
				<button className={styles.button} onClick={decrementCount}>-</button>
				<button className={styles.button} onClick={incrementCount}>+</button>
			</div>
			<button className={`${styles.button} ${styles.reset}`}
			onClick={resetCounter}
			>
				reset
			</button>
		</div>
	)
}

export default TestComponent