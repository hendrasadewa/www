import { getRandomChar } from '$lib/commons/utils/string.utils';
import type { Album } from '$lib/domains/lastfm/entity/album.entity';
import { albumRepository } from '$lib/domains/lastfm/repository/album.repository';

async function loadByQuery(query: string | null) {
	if (!query) {
		query = getRandomChar();
	}
	return await albumRepository.search(query, 10);
}

export async function load({ url }) {
	const response: {
		albums: Album[];
		error?: string;
	} = {
		albums: [],
		error: undefined
	};

	try {
		let loadedAlbums: Album[] | null = null;

		const query = url.searchParams.get('query');
		loadedAlbums = await loadByQuery(query);

		response.albums = loadedAlbums || [];
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error loading albums:', error.message);
			response.error = error.message;
		}
		response.error = 'Failed to load albums. Please try again later.';
	}
	return response;
}
