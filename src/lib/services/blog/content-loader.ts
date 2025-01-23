import type { SvelteComponent } from 'svelte';
import type { Post, SearchPostParams } from '../../types/post';

// utility functions
export function createPost(path: string, file: unknown): Post | null {
	const slug = path.split('/').at(-1)?.replace('.svx', '');
	if (!file || typeof file !== 'object' || !('metadata' in file) || !slug) {
		return null;
	}

	const metadata = file.metadata as Omit<Post, 'slug'>;
	return { ...metadata, slug };
}

// Content Loader Handlers
export async function handleGetContentBySlug(slug: string) {
	const post = (await import(`$lib/contents/${slug}.svx`)) as {
		default: typeof SvelteComponent;
		metadata: Omit<Post, 'slug'>;
	};

	return post;
}

export async function handleGetContents(params: SearchPostParams) {
	const { category, keyword } = params;

	// Load all posts eagerly from the contents folder
	const paths = import.meta.glob('$lib/contents/*.svx', { eager: true });

	// Pre-compile the search regex if needed
	const searchRegExp = keyword ? new RegExp(keyword, 'i') : null;

	// Transform and filter posts in a single step
	return (
		Object.entries(paths)
			.map(([path, file]) => createPost(path, file))
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
}
