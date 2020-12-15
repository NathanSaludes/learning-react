import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './DataFetching.module.scss'

import Post from './Post';

function DataFetching() {

	const [loading, setLoading] = useState(true);
	const [post, setPost] = useState({})
	const [postId, setPostId] = useState('');
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
				if (typeof response.data == 'object') {
					setPost(response.data);
					setLoading(false)
				}
			} catch (error) {
				if (error.response.status === 404) {
					setPost(null)
				}

				setLoading(false)
			}
		}

		fetchPosts()

	}, [idFromButtonClick])

	const handleGetPost = () => {
		if (postId) {
			setIdFromButtonClick(postId);
		}
	}

	const getPostJSX = () => {
		if (loading)
			return <p>Loading post...</p>
		if (post)
			return <Post post={post} />

		return <p>No post found.</p>
	}

	return (
		<div className={`component ${styles.wrapper}`}>
			<div className={styles.search}>
				<input className={styles.inputField} type="text" value={postId} onChange={e => setPostId(e.target.value)} placeholder="Enter post id (number)..." />
				<button className={styles.button} onClick={handleGetPost}>Search Post</button>
			</div>
			<div>
				{getPostJSX()}
			</div>
		</div >
	)
}

export default DataFetching