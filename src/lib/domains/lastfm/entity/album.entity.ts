import type { ImageSize, Tag, Wiki } from './common.entity';
import type { Track } from './track.entity';

export interface Album {
	id?: string;
	name: string;
	artist: string;
	url: string;
	albumArts: AlbumArt[];
	streamable: boolean;
	tags?: Tag[];
	tracks?: Track[];
	wiki?: Wiki;
}

export interface AlbumArt {
	url: string;
	size: ImageSize;
}

export type AlbumKeyPair = Pick<Album, 'artist' | 'name'>;
