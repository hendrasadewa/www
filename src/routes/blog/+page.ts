import { DESTINATION_PATH, ENTRY_PATH } from './constants';
import { importPosts } from './helpers';

export async function load() {
	const globImport = importPosts();

	const posts = Object.entries(globImport)
		.map(([slug, module]) => ({
			path: slug.replace(ENTRY_PATH, DESTINATION_PATH).replace('.md', ''),
			metadata: module.metadata
		}))
		.sort((a, b) => (new Date(b.metadata.date) > new Date(a.metadata.date) ? 1 : -1));

	return { posts };
}
