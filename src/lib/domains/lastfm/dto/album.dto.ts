import type { Tag, Wiki } from '../entity/common.entity';
import type {
	ImageDTO,
	LastFMResponse,
	SearchResultsResponse
} from './common.dto';
import type { TrackDTO } from './track.dto';

export interface AlbumDTO {
	artist: string;
	mbid: string;
	tags: { tag: Tag[] };
	playcount: string;
	image: ImageDTO[];
	tracks: { track: TrackDTO[] };
	url: string;
	name: string;
	listeners: string;
	wiki: Wiki;
	streamable?: string;
}

export interface AlbumSearchResults extends SearchResultsResponse {
	albummatches: {
		album: AlbumDTO[];
	};
}

export interface AlbumInfoResponse {
	album: AlbumDTO;
}

export type AlbumSearchResponse = LastFMResponse<AlbumSearchResults>;
