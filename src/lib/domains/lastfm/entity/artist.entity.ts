import type { Image } from './common.entity';

export interface Artist {
	id: string;
	name: string;
	playcount: number;
	listeners: number;
	url: string;
	streamable: boolean;
	image: Image[];
}
