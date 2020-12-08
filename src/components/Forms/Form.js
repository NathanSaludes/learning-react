import React, { Component } from 'react'

export class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: "",
			comments: ""
		}
	}

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}

	handleCommentChange = event => {
		this.setState({
			comments: event.target.value
		})
	}

	handleSubmit = event => {
		console.log(this.state);
		event.preventDefault();
	}

	render() {
		return (
			<form>
				<div>
					<span>Email: {this.state.email}</span>
					<br />
					<input type="text" value={this.state.email} onChange={this.handleEmailChange} />
				</div>
				<br />
				<div>
					<span>Comments:</span><br />
					<textarea value={this.state.comments} onChange={this.handleCommentChange} />
					<br />
					{this.state.comments}
				</div>

				<button type="submit" onClick={this.handleSubmit}>Submit</button>
			</form>
		)
	}
}

export default Form
