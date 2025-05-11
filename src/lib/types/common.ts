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
