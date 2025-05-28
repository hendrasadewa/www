import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	// get from the cookie
	const token = cookies.get('lastfm_auth_token');

	if (token) {
		redirect(302, '/app/lastfm');
	}
}
