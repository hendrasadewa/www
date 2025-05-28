export type ImageSize = 'small' | 'medium' | 'large' | 'extralarge';

export interface Image {
	url: string;
	size: ImageSize;
}

export interface ImageDimension {
	width: number;
	height: number;
}

export interface Tag {
	url: string;
	name: string;
}

export interface Wiki {
	published: string;
	summary: string;
	content: string;
}
