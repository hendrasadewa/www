<script lang="ts">
	import ArticleList from '$lib/components/ArticleList.svelte';
	import Seo from '$lib/components/SEO.svelte';

	export let data;

	// For Meta Tags
	const metaTags = {
		title: 'Hendra Sadewa - Web Engineer | Senior Web Developer in Indonesia',
		description:
			'I am Hendra Sadewa, a Web Engineer based in Bekasi, Indonesia. Currently working at Stockbit as a Senior Web Engineer. Discover my projects, tech stacks, and interests.',
		categories: [
			'Hendra',
			'Hendra Sadewa',
			'web engineer',
			'web engineer Indonesia',
			'senior web developer'
		],
		headerImageAlt: 'Hendra Sadewa portrait',
		headerImageURL: '/img/me.webp',
		published: true,
		url: 'https://hendrasadewa.com',
		author: 'Hendra Sadewa'
	};
</script>

<Seo {...metaTags} />

<article class="px-4 sm:px-0">
	<section class="space-y-2">
		<h1 class="font-display text-4xl">Artikel Terbaru</h1>
		<ArticleList posts={data.posts} />
	</section>
</article>
