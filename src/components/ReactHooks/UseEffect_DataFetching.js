import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Post(props) {
	const { post } = props;
	const styles = {
		post: {
			marginBottom: "1rem",
			maxWidth: '50rem'
		},
		title: {
			fontSize: '1.5rem',
		},
		body: {
			color: "gray",
			fontSize: '1rem'
		}
	}

	return (
		<div className="component" style={styles.post}>
			<h1 style={styles.title}>{post.title}</h1>
			<p style={styles.body}>{post.body}</p>
		</div>
	)
}

function DataFetching() {

	const [loadingState, setLoadingState] = useState(false)
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetchPosts()
	}, [])

	const fetchPosts = async () => {
		try {
			setLoadingState(true);
			const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
			if (typeof response.data == 'object') {
				setPosts(response.data)
				setLoadingState(false);
			}
		} catch (error) {
			console.log(error.response.data);
			setLoadingState(false);
		}
	}



	const getPostsJSX = () => {
		if (loadingState === true) {
			return <p>Loading posts...</p>
		}

		if (posts.length > 0)
			return posts.map(item => <Post post={item} key={item.id} />)

		return <p>There are currently no posts...</p>
	}

	return (
		<>
			{getPostsJSX()}
		</>
	)
}

export default DataFetching