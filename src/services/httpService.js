import axios from 'axios';

export const httpService = async () => {

	try {
		const response = await axios(config);
		console.log(response);
		return response.items;
	} catch (error) {
		console.log(error);
		throw Error(error.message);
	}
};

export default httpService;