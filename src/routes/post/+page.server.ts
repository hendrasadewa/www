import blogInteractor from '$lib/interactor/blog.interactor.js';

export async function load({ url }) {
	const { searchParams } = url;

	// parse the search params
	const category = searchParams.get('category');
	const keyword = searchParams.get('keyword');
	const response = blogInteractor.handleGetContents({ category, keyword });

	return { posts: response };
}
