export interface Metadata {
	title: string;
	description: string;
	categories: string[];
	headerImageAlt: string;
	headerImageURL: string;
	published: boolean;
	url: string;
	author: string;
	email: string;
}

export interface APIResponse<T = unknown> {
	message: string;
	data: T;
}

export interface WorkerResponse<T = unknown> {
	success: boolean;
	data: T;
	message: string;
}

export enum StatusEnum {
	UNSPECIFIED,
	INFO,
	WARNING,
	ERROR,
	SUCCESS
}
