import { json } from '@sveltejs/kit';
import blogInteractor from '$lib/interactor/blog.interactor';

export async function GET({ url }) {
	// Parse URL params
	const params = url.searchParams;
	const category = params.get('category');
	const keyword = params.get('q');

	// call the get content handler
	const posts = blogInteractor.handleGetContents({ category, keyword });

	return json(posts);
}
