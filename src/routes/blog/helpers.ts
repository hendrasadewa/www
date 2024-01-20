import type { Blogpost } from '../../lib/types/blog';
import { DESTINATION_PATH, ENTRY_PATH } from './constants';

export function getPostBySlug(slug = ''): Promise<Blogpost> {
	return import(`./entries/${slug}.md`);
}

export function importPosts() {
	const globImport = import.meta.glob<Blogpost>(`./entries/*.md`, {
		eager: true
	});

	const posts = Object.entries(globImport)
		.map(([slug, module]) => ({
			path: slug.replace(ENTRY_PATH, DESTINATION_PATH).replace('.md', ''),
			metadata: module.metadata
		}))
		.sort((a, b) =>
			new Date(b.metadata.date) > new Date(a.metadata.date) ? 1 : -1
		);

	return posts;
}
