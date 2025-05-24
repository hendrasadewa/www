import type {
	UserCredentials,
	UserDetails
} from '$lib/domains/pos/entity/user.entity';
import { createUserRepository } from '$lib/domains/pos/repository/user.repository';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const credentials: UserCredentials = {
		accessToken: cookies.get('accessToken'),
		refreshToken: cookies.get('refreshToken')
	};

	// get user information
	if (!credentials.accessToken) {
		return {};
	}

	const userRepo = createUserRepository(credentials.accessToken);

	let userDetails: UserDetails | undefined = undefined;

	userDetails = await userRepo.getMe();

	return {
		credentials,
		userDetails
	};
};
