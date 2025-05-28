import type { Artist } from './artist.entity';

export interface Track {
	streamable: {
		fulltrack: string;
		url: string;
	};
	duration: number;
	url: string;
	name: string;
	rank: number;
	artist: Pick<Artist, 'url' | 'name' | 'id'>;
}
