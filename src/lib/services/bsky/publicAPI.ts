import type { LikesResponse } from './types';

export const BASE_API_URL = 'https://public.api.bsky.app';

export async function GetPostLikes(uri: string) {
	const endpoint = new URL(BASE_API_URL);
	endpoint.pathname = 'xrpc/app.bsky.feed.getLikes';
	endpoint.searchParams.set('uri', uri);

	const response = await fetch(endpoint);
	const json: LikesResponse = await response.json();
	if (!json || !json.likes || !Array.isArray(json.likes)) {
		throw new Error('Failed to parse response');
	}

	return json;
}
