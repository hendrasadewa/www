export interface APIResponse<T = unknown> {
	message: string;
	data: T;
}

export interface WorkerResponse<T = unknown> {
	success: boolean;
	data: T;
	message: string;
}

export interface NotificationSchema {
	title: string;
	message: string;
	notifiedAt: Date;
}

export enum StatusEnum {
	UNSPECIFIED,
	INFO,
	WARNING,
	ERROR,
	SUCCESS
}
