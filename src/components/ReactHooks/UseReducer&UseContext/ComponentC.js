import React from 'react'
import ComponentE from './subcomponents/ComponentE'

function ComponentC() {
	return (
		<div className="component">
			<span>Component C</span><br/><br/>
			<ComponentE />
		</div>
	)
}

export default ComponentC
