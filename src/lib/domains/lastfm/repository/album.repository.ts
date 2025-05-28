import { get, lastFMMethods } from '../configs/api.configs';
import type { AlbumInfoResponse, AlbumSearchResponse } from '../dto/album.dto';
import type { Album } from '../entity/album.entity';

export const albumRepository = {
	getInfo: async ({
		albumName,
		artistName,
		mbid
	}: {
		albumName?: string;
		artistName?: string;
		mbid?: string;
	}) => {
		let params: Record<string, string> = {};
		if (mbid) {
			params = { mbid };
		} else if (albumName && artistName) {
			params = { album: albumName, artist: artistName };
		} else {
			throw new Error(
				'Either mbid or both albumName and artistName must be provided'
			);
		}

		const response = await get<AlbumInfoResponse>(
			lastFMMethods.album.getInfo,
			params
		);

		const album: Album = {
			id: response.album.mbid,
			name: response.album.name,
			artist: response.album.artist,
			url: response.album.url,
			albumArts: response.album.image.map((image) => ({
				url: image['#text'],
				size: image.size
			})),
			streamable: response.album.tracks.track.some(
				(track) => track.streamable['#text'] === '1'
			),
			tags: response.album.tags.tag.map((tag) => ({
				name: tag.name,
				url: tag.url
			})),
			tracks: response.album.tracks.track.map((track) => ({
				name: track.name,
				duration: track.duration,
				url: track.url,
				streamable: {
					fulltrack: track.streamable.fulltrack,
					url: track.streamable['#text']
				},
				artist: {
					name: track.artist.name,
					url: track.artist.url,
					id: track.artist.mbid || ''
				},
				album: response.album.name,
				rank: track['@attr'].rank ? Number(track['@attr'].rank) : 0
			}))
		};

		return album;
	},
	search: async (query: string, limit = 9, page = 1) => {
		const response = await get<AlbumSearchResponse>(
			lastFMMethods.album.search,
			{ album: query, limit: String(limit), page: String(page) }
		);
		const matches = response.results.albummatches.album;

		const albums = matches.map<Album>((album) => ({
			id: album.mbid,
			name: album.name,
			artist: album.artist,
			url: album.url,
			albumArts: album.image.map((image) => ({
				url: image['#text'],
				size: image.size
			})),
			streamable: album.streamable ? album.streamable === '1' : false,
			tracks: [],
			tags: []
		}));

		return albums;
	}
};
