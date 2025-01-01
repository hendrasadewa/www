export interface Post {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
	headerImageAlt: string;
	headerImageURL: string;
}

export interface SearchPostParams {
	category?: string | null;
	keyword?: string | null;
}
