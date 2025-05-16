import { error, json } from '@sveltejs/kit';
import blogInteractor from '$lib/interactor/blog.interactor';

export async function GET({ params: { slug } }) {
	if (!slug) {
		return error(400, { message: 'Invalid article slug' });
	}
	// call the get content handler
	const post = await blogInteractor.handleGetContentBySlug(slug);

	return json(post);
}
