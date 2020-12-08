import React from 'react';
import PostForm from './PostForm';

class HttpPostDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<React.Fragment>
				<PostForm />
			</React.Fragment>
		)
	}
}

export default HttpPostDemo;