import { error, json } from '@sveltejs/kit';
import blogRepository from '$lib/domains/blog/repository/blog.repository';

export async function GET({ params: { slug } }) {
	if (!slug) {
		return error(400, { message: 'Invalid article slug' });
	}
	// call the get content handler
	const post = await blogRepository.handleGetContentBySlug(slug);

	return json(post);
}
