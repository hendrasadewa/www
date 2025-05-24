import type { UserCredentials } from '$lib/domains/pos/entity/user.entity';
import type { Cookies } from '@sveltejs/kit';

export function loadCredential(cookies: Cookies) {
	const credentials: UserCredentials = {
		accessToken: cookies.get('accessToken'),
		refreshToken: cookies.get('refreshToken')
	};

	return credentials;
}
