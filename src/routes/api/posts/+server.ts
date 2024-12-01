import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types/post';

function createPost(path: string, file: unknown): Post | null {
	const slug = path.split('/').at(-1)?.replace('.svx', '');
	if (!file || typeof file !== 'object' || !('metadata' in file) || !slug)
		return null;

	const metadata = file.metadata as Omit<Post, 'slug'>;
	return { ...metadata, slug };
}

async function getPosts() {
	const paths = import.meta.glob('/src/contents/*.svx', { eager: true });

	return Object.entries(paths)
		.map(([path, file]) => createPost(path, file))
		.filter((post): post is Post => post !== null && post.published)
		.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}
