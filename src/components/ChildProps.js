import React from 'react';

function ChildPropsDemoComponent(props) {
	return (
		<div>
			{ props.children }
		</div>
	)
}

export default ChildPropsDemoComponent;