import { getRandomChar } from '$lib/commons/utils/string.utils';
import type {
	Album,
	AlbumKeyPair
} from '$lib/domains/lastfm/entity/album.entity';
import { albumRepository } from '$lib/domains/lastfm/repository/album.repository';

async function loadByQuery(query: string | null) {
	if (!query) {
		query = getRandomChar();
	}
	return await albumRepository.search(query, 10);
}

async function loadByCode(code: string | null) {
	if (!code) {
		return null;
	}

	const jsonString = atob(code);
	const json: AlbumKeyPair[] = JSON.parse(jsonString);

	const result: Album[] = [];
	for (const album of json) {
		const info = await albumRepository.getInfo({
			albumName: album.name,
			artistName: album.artist
		});
		result.push(info);
	}

	return result;
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

		const code = url.searchParams.get('code');
		const query = url.searchParams.get('query');
		if (code) {
			loadedAlbums = await loadByCode(code);
		} else {
			loadedAlbums = await loadByQuery(query);
		}
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
