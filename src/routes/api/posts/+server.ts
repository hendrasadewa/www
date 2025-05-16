import { json } from '@sveltejs/kit';
import blogRepository from '$lib/domains/blog/repository/blog.repository';

export async function GET({ url }) {
	// Parse URL params
	const params = url.searchParams;
	const category = params.get('category');
	const keyword = params.get('q');

	// call the get content handler
	const posts = blogRepository.handleGetContents({ category, keyword });

	return json(posts);
}
