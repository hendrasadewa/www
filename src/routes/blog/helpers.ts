import type { Blogpost } from './types';

export const getPostBySlug = (slug = ''): Promise<Blogpost> => import(`./entries/${slug}.md`);
export const importPosts = () =>
	import.meta.glob<Blogpost>(`./entries/*.md`, {
		eager: true
	});
