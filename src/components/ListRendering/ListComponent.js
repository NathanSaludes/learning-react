import React from 'react'
import { Person } from './Person';

export default function ListComponent() {
	const people = [
		'Harry Potter',
		'Hermoine Granger',
		'Ronald Weasely',
		'Rubeus Hagrid',
	];

	/* ---------------------------------------------
	This is technically rendering an array of JSX.
	We have separated the person's name into another 
	component called 'Person'.

	in a sense, this is how it looks like when we
	evaluate the return value:

	<div>
		{[
			<h1>{...}</h1>,
			<h1>{...}</h1>,
			<h1>{...}</h1>,
			<h1>{...}</h1>,
		]}
	</div>

	--------------------------------------------- */
	const personList = people.map(person => <Person name={person} />)

	return (
		<div>{personList}</div>
	)
}
