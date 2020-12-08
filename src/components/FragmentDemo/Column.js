import React from 'react'

function Columns() {

	/* --------------------------------------------------------------------------------------
	We cannot <div> a wrapper element for our component since <td> is appropriately used only
	for tables. Therefore we make use of React Fragments to give a component a wrapper 
	without introducing any additional DOM elements.
	-------------------------------------------------------------------------------------- */

	return (
		<React.Fragment>
			<td>ID</td>
			<td>Firstname</td>
			<td>Lastname</td>
		</React.Fragment>
	)
}

export default Columns;
