export interface Coordinates {}

export interface Address {}

export interface Bank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}

export interface Company {
	department: string;
	name: string;
	title: string;
	address: Address;
}

export interface Crypto {
	coin: string;
	wallet: string;
	network: string;
}

export interface Hair {
	color: string;
	type: string;
}

export interface BiologicalInfo {
	age: number;
	birthDate: string;
	gender: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: Hair;
}

export interface NetworkInfo {
	ip: string;
	address: Address;
	macAddress: string;
	userAgent: string;
}

export interface Identity {
	firstName: string;
	lastName: string;
	maidenName: string;
}

export interface Contact {
	email: string;
	phone: string;
}

export interface UserCredentials {
	accessToken?: string;
	refreshToken?: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image: string;
}

export interface UserDetails
	extends Identity,
		BiologicalInfo,
		NetworkInfo,
		Contact {
	id: number;
	username: string;
	password: string;
	image: string;
	university: string;
	ein: string;
	ssn: string;
	role: 'admin' | 'moderator' | 'user';
	bank: Bank;
	company: Company;
	crypto: Crypto;
}
