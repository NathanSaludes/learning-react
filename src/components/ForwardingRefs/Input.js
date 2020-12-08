import React from 'react';


const Input = React.forwardRef((props, ref) => {
	/*
		[3] React.forwardRef() method provides a ref parameter which contains the ref from the parent component
		which is then attached to the target element (in this case, the <input> element)
	*/
	return (
		<div>
			<input type="text" ref={ref} />
		</div>
	)
});

export default Input;