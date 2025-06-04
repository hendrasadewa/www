import { dirname, join } from 'node:path';

import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';
import { fileURLToPath } from 'node:url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({
		smartypants: {
			quotes: false,
			ellipses: true,
			backticks: true,
			dashes: 'oldschool',
		},
		layout: {
			article: dirname(fileURLToPath(import.meta.url)) + '/src/lib/domains/Blog/components/ArticleLayout.svelte'
		}
	})],
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	},
	extensions: ['.svelte', '.svx']
};

export default config;
