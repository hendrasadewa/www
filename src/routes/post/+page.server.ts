import blogRepository from '$lib/domains/blog/repository/blog.repository';
import type { Actions } from '@sveltejs/kit';

export async function load({ url }) {
	const { searchParams } = url;

	// parse the search params
	const category = searchParams.get('category');
	const keyword = searchParams.get('keyword');
	const response = blogRepository.handleGetContents({ category, keyword });

	return { posts: response };
}

export const actions = {
	default: async ({ request }) => {
		// load form data
		const data = await request.formData();
		const keyword = data.get('keyword')?.toString();
		const response = blogRepository.handleGetContents({ keyword });
		return { posts: response };
	}
} satisfies Actions;
