import React, { useState } from 'react'

function HookCounter4() {
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([...items, {
			id: items.length,
			value: Math.floor(Math.random() * 10)
		}])
	}

	const itemList = () => {
		if (items.length > 0) {
			return items.map(item => (
				<li key={item.id}>{item.value}</li>
			))
		}

		return <li>There are currently no items in the list...</li>
	}

	return (
		<div className="component">
			<button onClick={addItem}>Add a random number</button>
			<ul>
				{itemList()}
			</ul>
		</div>
	)
}

export default HookCounter4