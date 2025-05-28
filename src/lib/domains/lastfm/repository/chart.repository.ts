import { get, lastFMMethods } from '../configs/api.configs';
import type { TopArtistsResults } from '../dto/artist.dto';
import type { Artist } from '../entity/artist.entity';

export const chartRepository = {
	getTopArtists: async (limit = 9, page = 1) => {
		const response = await get<TopArtistsResults>(
			lastFMMethods.chart.getTopArtists,
			{ limit: String(limit), page: String(page) }
		);
		const matches = response.artists.artist;

		const artists = matches.map<Artist>((artist) => ({
			id: artist.mbid,
			name: artist.name,
			url: artist.url,
			streamable: artist.streamable === '1',
			listeners: parseInt(artist.listeners, 10),
			playcount: parseInt(artist.playcount, 10),
			image: artist.image.map((image) => ({
				url: image['#text'],
				size: image.size
			}))
		}));

		return artists;
	}
};
