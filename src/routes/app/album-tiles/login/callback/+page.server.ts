import { redirect } from '@sveltejs/kit';

export async function load({ url, cookies }) {
	const token = url.searchParams.get('token');
	if (!token) {
		return { error: 'No token provided, please sign in again' };
	}

	// if token exists, we store it on the cookie
	cookies.set('lastfm_auth_token', token, { path: '/' });

	redirect(302, '/app/lastfm');
}
