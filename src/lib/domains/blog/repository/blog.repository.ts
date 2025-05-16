import type { SvelteComponent } from 'svelte';

import type { Post, SearchPostParams } from '$lib/entity/blog.entity';

const blogRepository = {
	handleGetContents: (params: SearchPostParams) => {
		const { category, keyword } = params;

		// Load all posts eagerly from the contents folder
		const paths = import.meta.glob('$lib/domains/blog/contents/*.svx', {
			eager: true
		});

		// Pre-compile the search regex if needed
		const searchRegExp = keyword ? new RegExp(keyword, 'i') : null;

		// Transform and filter posts in a single step
		return (
			Object.entries(paths)
				.map(([path, file]) => {
					const slug = path.split('/').at(-1)?.replace('.svx', '');
					if (!file || !slug) {
						return null;
					}
					// make sure file is object and has metadata field
					if (typeof file !== 'object' || !('metadata' in file)) {
						return null;
					}

					const metadata = file.metadata as Omit<Post, 'slug'>;
					return { ...metadata, slug };
				})
				.filter(
					(post): post is Post =>
						// filter null posts
						post !== null &&
						// only return published contents
						post.published &&
						// filter by query
						(!category || post.categories.includes(category)) &&
						// filter by keyword
						(!searchRegExp ||
							searchRegExp.test(post.title) ||
							searchRegExp.test(post.categories.join(',')))
				)
				// sort by release date, descending order
				.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
		);
	},

	handleGetContentBySlug: async (slug: string) => {
		const post = (await import(`$lib/domains/blog/contents/${slug}.svx`)) as {
			default: typeof SvelteComponent;
			metadata: Omit<Post, 'slug'>;
		};

		return post;
	}
};

export default blogRepository;
