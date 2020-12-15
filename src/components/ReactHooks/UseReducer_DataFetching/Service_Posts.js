import Axios from "axios";

export async function fetchPost(id) {

	const response = {
		error: null,
		data: {}
	}

	try {
		const axiosResponse = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const post = axiosResponse.data;

		if (typeof post === 'object') {
			return { ...response, data: post }
		}

	} catch (error) {
		return { ...response, error: error }
	}
}