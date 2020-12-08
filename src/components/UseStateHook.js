import React, { useState } from 'react'

function UseStateHook() {

	const [name, setName] = useState("");

	const handleUpdateName = (event) => {
		setName(event.target.value);
	}

	const handleResetName = (event) => {
		setName('');
	}

	return (
		<div>
			<h1>Hello there, {name ? name : 'Guest'}!</h1>
			<input type="text" value={name} onChange={(e) => handleUpdateName(e)} />
			<button onClick={handleResetName}>Reset Name</button>
		</div>
	)
}

export default UseStateHook
