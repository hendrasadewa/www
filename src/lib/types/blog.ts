import type { SvelteComponent } from 'svelte';

export interface PostMetadata {
	title: string;
	description: string;
	date: Date;
	tags: string[];
}

export interface Blogpost {
	default: SvelteComponent;
	metadata: PostMetadata;
}

export interface PostInfo {
	path: string;
	metadata: PostMetadata;
}
