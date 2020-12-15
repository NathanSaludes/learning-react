import styles from './Post.module.scss'

function Post(props) {
	const { post } = props;

	return (
		<div className={`component ${styles.post}`}>
			<h1 className={styles.title}>{post.title}</h1>
			<p className={styles.body}>{post.body}</p>
		</div>
	)
}

export default Post;