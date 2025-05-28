import ky from 'ky';
import env from './env.configs';

export const lastFMAPI = ky.create({
	prefixUrl: 'https://ws.audioscrobbler.com/2.0/',
	searchParams: {
		api_key: env.API_KEY,
		format: 'json'
	}
});

export function get<T = unknown>(
	method: string,
	params: Record<string, string> = {}
) {
	return lastFMAPI
		.get<T>('', {
			searchParams: { method, ...params }
		})
		.json();
}

export const lastFMMethods = {
	album: {
		addTags: 'album.addtags',
		getInfo: 'album.getinfo',
		getTags: 'album.gettags',
		getTopTags: 'album.gettoptags',
		removeTag: 'album.removetag',
		search: 'album.search'
	},
	chart: {
		getTopArtists: 'chart.gettopartists'
	}
};
export type LastFMMethods = typeof lastFMMethods;
