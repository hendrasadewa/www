export interface LikesResponse {
	likes: Like[];
	uri: string;
}

export interface Like {
	actor: Actor;
	createdAt: string;
	indexedAt: string;
}

export interface Actor {
	did: string;
	handle: string;
	displayName: string;
	avatar: string;
	associated: Associated;
	labels: string[];
	createdAt: string;
	description: string;
	indexedAt: string;
}

export interface Associated {
	chat: Chat;
}

export interface Chat {
	allowIncoming: string;
}
