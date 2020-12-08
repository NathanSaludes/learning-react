import React from 'react'

const withCounter = (WrappedComponent, incrementValue) => {
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
}

export default withCounter;