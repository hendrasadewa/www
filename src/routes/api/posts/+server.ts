import { json } from '@sveltejs/kit';
import { handleGetContents } from '$lib/services/blog/content-loader';

export async function GET({ url }) {
	// Parse URL params
	const params = url.searchParams;
	const category = params.get('category');
	const keyword = params.get('q');

	// call the get content handler
	const posts = await handleGetContents({ category, keyword });

	return json(posts);
}
