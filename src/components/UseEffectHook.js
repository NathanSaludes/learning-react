import React, { useEffect } from 'react'

export default function UseEffectHook() {

	const someMethod = () => {
		console.log('Hello World');
	}

	useEffect(someMethod, [])

	return (
		<div>

		</div>
	)
}
