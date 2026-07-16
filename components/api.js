import axios from 'axios';

const API_URL = "http://localhost:3000";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export const api = axios.create({
	baseURL: API_URL,
	timeout: 10000
});

api.interceptors.request.use(async config => {
	console.log("Petición: ", config.url);
	await sleep(1000);
	return config;
});

api.interceptors.response.use(
	response => {
		console.log("Respuesta: ", response.status);
		return response;
	},
	error => Promise.reject(error)
);