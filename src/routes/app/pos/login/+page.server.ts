import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { handleLogin } from '$lib/server/domains/pos/actions/user.actions';
import { loadCredential } from '$lib/server/domains/pos/loader/user.loader';

export const load: PageServerLoad = async ({ cookies }) => {
	const credentials = loadCredential(cookies);
	if (credentials.accessToken) {
		redirect(301, '/app/pos');
	}
};

export const actions = {
	default: async ({ cookies, request }) => {
		// load form data
		const data = await request.formData();
		// handle login process
		const response = await handleLogin(data);
		if (!response.data) {
			error(400, { message: 'failed login attempt' });
		}
		// set credentials to cookies
		cookies.set('accessToken', response.data.accessToken, { path: '/' });
		cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
		// redirect to the main page
		redirect(302, '/app/pos');
	}
} satisfies Actions;
