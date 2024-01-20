import { error } from '@sveltejs/kit';
import { getPostBySlug } from '../helpers.js';

export async function load({ params }) {
	try {
		const post = await getPostBySlug(params.slug);
		console.log(post);
		const { title, date } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}
