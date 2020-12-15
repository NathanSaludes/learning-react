import React from 'react'
import First from './First'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ContextHookDemo() {
	return (
		<div>
			<UserContext.Provider value={'Nathaniel'}>
				<ChannelContext.Provider value={'Codevolution'}>
					<First />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default ContextHookDemo
