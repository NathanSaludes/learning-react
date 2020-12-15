import React from 'react'
import styles from './SearchPost.module.scss'
import Post from './Post'

/* This is the presentation component - concerned for displaying data only */
function SearchPost(props) {

	const {
		isloading,
		error,
		post,
		postIdSearch,
		handleGetPost,
		onHitEnter,
		handleChangeSearchId
	} = props;

	const getPostJSX = () => {
		if (isloading)
			return <p>Loading post...</p>
		if (error)
			return <p>{error}</p>
		if (post && post !== {})
			return <Post title={post?.title} body={post?.body} />

		return <p>No post found.</p>
	}

	return (
		<div className={`component ${styles.wrapper}`}>
			<div className={styles.search}>
				<input className={styles.inputField} type="text" value={postIdSearch} onChange={handleChangeSearchId} placeholder="Enter post id (number)..." onKeyDown={onHitEnter} />
				<button className={styles.button} onClick={handleGetPost} >Search Post</button>
			</div>
			<div>
				{getPostJSX()}
			</div>
		</div >
	)
}

export default React.memo(SearchPost)