<script lang="ts">
	import ArticleHeader from '$lib/components/blog/ArticleHeader.svelte';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import Seo from '$lib/components/common/SEO.svelte';

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

	let [highlighted, ...rest] = data.posts;
</script>

<Seo {...metaTags} />

<div class="space-y-8 pb-8">
	<section id="highlight" class="space-y-4">
		<header class="py-4">
			<h1 class="font-display text-4xl">Artikel Terbaru</h1>
		</header>
		<a href={`/post/${highlighted.slug}`} class="cursor-default">
			<ArticleHeader
				headerImageURL={highlighted.headerImageURL}
				headerImageAlt={highlighted.headerImageAlt}
				categories={highlighted.categories}
				date={highlighted.date}
				description={highlighted.description}
				title={highlighted.title}
			/>
		</a>
	</section>

	<section id="posts" class="space-y-4">
		<header class="py-4">
			<h1 class="font-display text-4xl">Artikel Lainnya</h1>
		</header>
		<ArticleList posts={rest} />
	</section>
</div>
