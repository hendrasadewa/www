import { importPosts } from './blog/helpers';

export async function load() {
	const posts = importPosts();

	return { posts };
}
