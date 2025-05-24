import { createAPIInstance } from '../config/dummyjson.config';
import type {
	SignInResponse,
	RefreshTokenResponse,
	GetUserResponse
} from '../dto/user.dto';

export function createUserRepository(token?: string) {
	const api = createAPIInstance(token);
	return {
		login: (username: string, password: string) =>
			api
				.post<SignInResponse>('user/login', { json: { username, password } })
				.json(),
		refresh: (refreshToken: string, expiresInMins: number) =>
			api
				.post<RefreshTokenResponse>('user/login', {
					json: { refreshToken, expiresInMins }
				})
				.json(),
		getMe: () =>
			api
				.get<GetUserResponse>('user/me', {
					headers: { credentials: 'include' }
				})
				.json()
	};
}
