import type { User, UserCredentials, UserDetails } from '../entity/user.entity';
import { createUserRepository } from '../repository/user.repository';

interface State {
	info: User | undefined;
	details: UserDetails | undefined;
	credentials: UserCredentials | undefined;
}

export const userStore = $state<State>({
	info: undefined,
	details: undefined,
	credentials: undefined
});

const userRepo = createUserRepository(userStore.credentials?.accessToken);

export const userStoreAction = {
	loadCredentials: (userCredentials: UserCredentials) => {
		userStore.credentials = userCredentials;
	},
	getMe: async () => {
		const response = await userRepo.getMe();
		userStore.details = response;
		return userStore.details;
	},
	login: async (username: string, password: string) => {
		const response = await userRepo.login(username, password);
		// stores the user data
		userStore.info = {
			id: response.id,
			username: response.username,
			email: response.email,
			firstName: response.firstName,
			lastName: response.lastName,
			gender: response.gender,
			image: response.image
		};
		// store the credentials
		userStore.credentials = {
			accessToken: response.accessToken,
			refreshToken: response.accessToken
		};
		// refresh the api instance
		return userStore.credentials;
	},
	logout: () => {
		// cleanup store data
		userStore.info = undefined;
		userStore.details = undefined;
		userStore.credentials = undefined;
	}
};
