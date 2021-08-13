import axios from 'axios';

export const httpService = async ({searchParams, id}) => {
	const config = {
		baseURL: 'https://api.github.com/',
	}
	if (searchParams) { config.url = `search/users?q=${searchParams}` };
	if (id) { config.url = `users/${id}` };

	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {		
		console.log ('Error ', error.message);
	}
};

export default httpService;