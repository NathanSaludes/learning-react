import React from 'react';
import axios from 'axios';

class PostList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			errorMessage: ""
		}
	}

	async componentDidMount() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			this.setState({
				posts: response.data
			})

		} catch (error) {
			console.log(error);
			this.setState({
				errorMessage: "Error retrieving data"
			})
		}
	}

	render() {
		const { posts, errorMessage } = this.state;
		const listOfPostsJSX = posts.length ? posts.map(post => {
			return (
				<div className="component" key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.body}</p>
				</div>
			)
		}) : null;

		return (
			<div>
				{listOfPostsJSX}
				{errorMessage ? <div>{errorMessage}</div> : null}
			</div>
		)
	}
}

export default PostList;