import { createUserRepository } from '$lib/domains/pos/repository/user.repository';

export async function handleLogin(data: FormData) {
	const userRepository = createUserRepository();
	const username = data.get('username');
	const password = data.get('password');

	if (username == null) {
		return { success: false, error: 'username is required' };
	}

	if (password == null) {
		return { success: false, error: 'password is required' };
	}

	const response = await userRepository.login(
		username.toString(),
		password.toString()
	);

	return {
		data: response
	};
}
