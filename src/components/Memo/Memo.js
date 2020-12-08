import React from 'react'

/* ---------------------------------------------------------
The concept is the same for PureComponents, but this time
it's for functional components.
--------------------------------------------------------- */

function MemoDemo() {
	console.log('%cMemoDemo Component Rendered!', 'color: red');
	return (
		<p className="component">Memo Component</p>
	)
}

export default React.memo(MemoDemo);
