import type { UserCredentials, UserDetails } from '../entity/user.entity';

export interface SignInResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
	accessToken: string;
	refreshToken: string;
}

export interface RefreshTokenResponse extends UserCredentials {}

export interface GetUserResponse extends UserDetails {}

export interface SearchUserResponse extends PaginatedResponse {
	users: GetUserResponse[];
}
