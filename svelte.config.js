import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex({
		smartypants: {
			quotes: true,
			ellipses: true,
			backticks: true,
			dashes: 'oldschool',
		},
		layout: {
			article: './src/lib/components/ArticleLayout.svelte'
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
