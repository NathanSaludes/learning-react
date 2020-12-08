import React from 'react'

export default function HeroName(props) {
	
	if (props.alias === "Thanos") {
		throw new Error('This is not a hero.');
	}

	return (
		<div>
			<p>{props.alias}</p>
		</div>
	)
}
