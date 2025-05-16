import type { Post } from '$lib/commons/entity/blog.entity';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
