import { useEffect, useRef } from 'react'

function FocusInput() {
	const inputRef = useRef();

	useEffect(() => {
		// focus on the input element upon component mount
		inputRef.current.focus();
	}, [])

	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput