import React from 'react';
import Columns from './Column';

function Table() {
	return (
		<table className="component">
			<thead>
				<tr>
					<Columns />
				</tr>
			</thead>
		</table>
	)
}

export default Table;
