import type { AttrPaginationDTO, ImageDTO } from './common.dto';

export interface ArtistDTO {
	name: string;
	playcount: string;
	listeners: string;
	mbid: string;
	url: string;
	streamable: string;
	image: ImageDTO[];
}

export interface TopArtistsResults extends PaginatedResponse {
	artists: {
		artist: ArtistDTO[];
	};
	'@attr': AttrPaginationDTO;
}
