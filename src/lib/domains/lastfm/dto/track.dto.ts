import type { ArtistDTO } from './artist.dto';

export interface TrackDTO {
	streamable: StreamableDTO;
	duration: number;
	url: string;
	name: string;
	'@attr': { rank: number };
	artist: Pick<ArtistDTO, 'url' | 'name' | 'mbid'>;
}

export interface StreamableDTO {
	fulltrack: string;
	'#text': string;
}
