import blogRepository from '$lib/domains/blog/repository/blog.repository';

export async function load({ params: { slug } }) {
	try {
		const post = await blogRepository.handleGetContentBySlug(slug);
		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		console.error(`Error loading content for slug "${slug}":`, err);
		throw new Error(`Content not found for slug: ${slug}`);
	}
}
