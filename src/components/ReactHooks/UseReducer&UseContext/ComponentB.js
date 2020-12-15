import React from 'react'
import ComponentD from './subcomponents/ComponentD'

function ComponentB() {
	return (
		<div className="component">
			<span>Component B</span><br/><br/>
			<ComponentD />
		</div>
	)
}

export default ComponentB
