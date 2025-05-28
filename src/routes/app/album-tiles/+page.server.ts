import { getRandomChar } from '$lib/commons/utils/string.utils';
import type { Album } from '$lib/domains/lastfm/entity/album.entity';
import { albumRepository } from '$lib/domains/lastfm/repository/album.repository';

export async function load({ url }) {
	const response: {
		albums: Album[];
		error?: string;
	} = {
		albums: [],
		error: undefined
	};

	try {
		let query = url.searchParams.get('query');
		if (!query) {
			query = getRandomChar();
		}
		const albums = await albumRepository.search(query, 9);
		response.albums = albums;
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error loading albums:', error.message);
			response.error = error.message;
		}
		response.error = 'Failed to load albums. Please try again later.';
	}
	return response;
}
