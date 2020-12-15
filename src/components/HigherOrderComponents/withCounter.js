import { useState } from 'react'

// Class Based Version
/* const withCounter = (WrappedComponent, incrementValue) => {
	class WithCounter extends React.Component {

		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}


		incrementCounter = () => {
			this.setState(prevState => {
				return {
					count: prevState.count + incrementValue
				}
			})
		}

		render() {
			return (
				<WrappedComponent
					incrementCounter={this.incrementCounter}
					counterValue={this.state.count}
					{...this.props}
				/>
			)
		}
	}

	return WithCounter;
} */

export function withCounter(WrappedComponent, incrementValue) {
	return (function WithCounter(props) {
		const [count, setCount] = useState(0);

		const incrementCounter = () => {
			setCount(currentState => currentState + incrementValue)
		}

		return (
			<WrappedComponent
				incrementCounter={incrementCounter}
				counterValue={count}
			/>
		)
	})
}