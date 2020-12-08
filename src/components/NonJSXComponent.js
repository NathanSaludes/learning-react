import React from 'react';

function NonJSXComponent() {
	// return (
	// 	<div id='sample_id' className='sample_class_name'>
	// 		<span>This is a component using jsx</span>
	// 	</div>
	// )

	return React.createElement(
		'div',
		{ id: 'sample_id', className: 'sample_class_name' },
		React.createElement(
			'span',
			null,
			'This is a component wihout using JSX'
		)
	)
}

export default NonJSXComponent;