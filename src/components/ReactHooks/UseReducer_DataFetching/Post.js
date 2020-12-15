import React from 'react'
import styles from './Post.module.scss'

function Post(props) {
	const { title, body } = props;
	
	return (
		<div className={`component ${styles.post}`}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.body}>{body}</p>
		</div>
	)
}

export default React.memo(Post);