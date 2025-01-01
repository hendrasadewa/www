import { error, json } from '@sveltejs/kit';
import { handleGetContentBySlug } from '$lib/services/blog/content-loader';

export async function GET({ params: { slug } }) {
	if (!slug) {
		return error(400, { message: 'Invalid article slug' });
	}
	// call the get content handler
	const post = await handleGetContentBySlug(slug);

	return json(post);
}
