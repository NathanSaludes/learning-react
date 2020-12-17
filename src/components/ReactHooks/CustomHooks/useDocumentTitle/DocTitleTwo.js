import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleTwo() {
	const [count, setCount] = useState(0)

	useDocumentTitle(count)

	return (
		<button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
	)
}

export default DocTitleTwo
