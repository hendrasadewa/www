import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../contents/${params.slug}.svx`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		console.error(err);
		error(404, `Could not find ${params.slug}`);
	}
}
