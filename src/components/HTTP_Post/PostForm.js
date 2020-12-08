import React from 'react'
import Axios from 'axios';

class PostForm extends React.Component {
	constructor() {
		super();
		this.state = {
			userId: '',
			title: '',
			body: '',
		}
	}

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleFormSubmit = async (e) => {
		try {
			e.preventDefault();
			const response = await Axios.post('https://jsonplaceholder.typicode.com/posts', this.state);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { userId, title, body } = this.state;
		return (
			<div className="component">
				<form method="post" onSubmit={this.handleFormSubmit}>
					<div>
						<input type="text" name="userId" placeholder="User ID" value={userId} onChange={this.handleInputChange} />
					</div>
					<div>
						<input type="text" name="title" placeholder="Title" value={title} onChange={this.handleInputChange} />
					</div>
					<div>
						<textarea name="body" rows="10" placeholder="Body" value={body} onChange={this.handleInputChange} />
					</div>

					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm;