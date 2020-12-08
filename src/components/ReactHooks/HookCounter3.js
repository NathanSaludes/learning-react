import React, { useState } from 'react'

function HookCounter3() {

	const [name, setName] = useState({ firstname: '', lastname: '' })

	const handleInputChange = (e) => {
		switch (e.target.name) {
			case 'firstname':
				setName({ ...name, firstname: e.target.value })
				break

			case 'lastname':
				setName({ ...name, lastname: e.target.value })
				break

			default:
				break
		}
	}

	const showNameJSX = () => {
		if (name.firstname || name.lastname) {
			return <span>{name.firstname} {name.lastname}</span>
		}

		return "Guest"
	}

	return (
		<div>
			<input type="text" name="firstname" value={name.firstname} onChange={(e) => handleInputChange(e)} />
			<input type="text" name="lastname" value={name.lastname} onChange={(e) => handleInputChange(e)} />
			<h2>Hello, {showNameJSX()}!</h2>
		</div>
	)

}

export default HookCounter3