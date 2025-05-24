import ky from 'ky';
import type { KyRequest } from 'ky';

const baseURL = new URL('https://dummyjson.com');

function authorizationHook(token?: string) {
	return (request: KyRequest) => {
		if (token) {
			request.headers.append('Authorization', `Bearer ${token}`);
		}
	};
}

export function createAPIInstance(token?: string) {
	const instance = ky.create({
		prefixUrl: baseURL,
		hooks: {
			beforeRequest: [authorizationHook(token)],
			afterResponse: []
		}
	});
	return instance;
}

export const api = createAPIInstance();
