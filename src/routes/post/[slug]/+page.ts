import { handleGetContentBySlug } from '$lib/services/blog/content-loader';

export async function load({ params: { slug } }) {
	try {
		const post = await handleGetContentBySlug(slug);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		console.error(`Error loading content for slug "${slug}":`, err);
		throw new Error(`Content not found for slug: ${slug}`);
	}
}
