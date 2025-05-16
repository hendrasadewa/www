import blogRepository from '$lib/domains/blog/repository/blog.repository';

export async function load({ url }) {
	const { searchParams } = url;

	// parse the search params
	const category = searchParams.get('category');
	const keyword = searchParams.get('keyword');
	const response = blogRepository.handleGetContents({ category, keyword });

	return { posts: response };
}
