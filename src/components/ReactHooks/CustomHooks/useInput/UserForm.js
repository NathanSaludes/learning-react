import React from 'react'
import useInput from './useInput'

function UserForm() {
	const [firstname, bindFirstName, resetFirstName] = useInput('')
	const [lastname, bindLastName, resetLastName] = useInput('')

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstname} ${lastname}!`);
		resetFirstName()
		resetLastName()
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First name</label><br/>
					<input
						{...bindFirstName}
						type="text"
					/>
				</div>
				<div>
					<label>Last name</label><br/>
					<input
						{...bindLastName}
						type="text"
					/>
				</div>
				<br/>
				<button type="submit" disabled={!firstname || !lastname ? true : false}>Submit</button>
			</form>
		</div>
	)
}

export default UserForm
