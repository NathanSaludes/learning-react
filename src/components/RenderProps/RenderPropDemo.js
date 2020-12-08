import React from 'react'

import ClickCounter from './ClickCounter'
import Counter from './Counter'
import HoverCounter from './HoverCounter'

function RenderPropDemo() {
	return (
		<div>
			<Counter>
				{(count, incrementCount) => (
					<ClickCounter count={count} incrementCount={incrementCount} />
				)}
			</Counter>
			<Counter>
				{(count, incrementCount) => (
					<HoverCounter count={count} incrementCount={incrementCount} />
				)}
			</Counter>
		</div>
	)
}

export default RenderPropDemo;
