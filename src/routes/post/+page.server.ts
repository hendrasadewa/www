import { handleGetContents } from '$lib/services/blog/content-loader.js';

export async function load({ url }) {
	const { searchParams } = url;

	// parse the search params
	const category = searchParams.get('category');
	const keyword = searchParams.get('keyword');

	const response = await handleGetContents({ category, keyword });

	return { posts: response };
}
