import React from 'react'

function Button(props) {

	const { handleClick, children } = props;
	console.log('Rendering button - ', children);

	return (
		<button onClick={handleClick}>
			{children}
		</button>
	)
}

export default React.memo(Button)
