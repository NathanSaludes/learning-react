import { useState, useEffect, useReducer } from 'react'
import { fetchPost } from './Service_Posts'
import SearchPost from './SearchPost'


const initialState = {
	loading: true,
	error: false,
	post: {},
	postId: 1
}

const ACTION_TYPES = {
	SUCCESS: 'FETCH_SUCCESS',
	ERROR: 'FETCH_ERROR',
	UPDATE_POST_ID: 'UPDATE_POST_ID'
}

function reducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.SUCCESS: {
			return {
				...state,
				loading: false,
				post: action.payload,
				error: ''
			}
		}

		case ACTION_TYPES.ERROR: {
			return {
				...state,
				loading: false,
				post: {},
				error: 'Something went wrong...'
			}
		}

		case ACTION_TYPES.UPDATE_POST_ID: {
			return {
				...state,
				postId: action.payload
			}
		}

		default: {
			throw new Error(`Unsupported action type: ${action.type}`)
		}
	}
}

/* This is the container component (SearchPost) - Where all backend logic is contained */
function SearchPostContainer() {

	const [state, dispatch] = useReducer(reducer, initialState);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	useEffect(() => {
		fetchPost(idFromButtonClick).then(({ error, data }) => {
			if (error) {
				console.error(error);
				dispatch({ type: ACTION_TYPES.ERROR })
			} else {
				dispatch({ type: ACTION_TYPES.SUCCESS, payload: data })
			}
		})

	}, [idFromButtonClick])

	const handleGetPost = (e) => {
		if (state.postId) {
			setIdFromButtonClick(state.postId);
		}
	}

	const onHitEnter = (e) => {
		if (e.key === 'Enter') {
			handleGetPost()
		}
	}

	const handleChangeSearchId = (e) => {
		dispatch({ type: ACTION_TYPES.UPDATE_POST_ID, payload: e.target.value })
	}

	return (
		<SearchPost
			isloading={state.loading}
			error={state.error}
			post={state.post}
			postIdSearch={state.postId}
			handleGetPost={handleGetPost}
			onHitEnter={onHitEnter}
			handleChangeSearchId={handleChangeSearchId}
		/>
	)
}

export default SearchPostContainer