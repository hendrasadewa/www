<script lang="ts">
	import ArticlePublishedDate from '$lib/components/ArticlePublishedDate.svelte';
	import ArticleTags from '$lib/components/ArticleTags.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import siteInfo from '$lib/configs/siteInfo.js';

	export let data;
</script>

<Seo
	title="{siteInfo.defaultTitle} | Post: {data.meta.title}"
	description={data.meta.description}
/>

<article>
	<header class="relative">
		<img
			src={data.meta.headerImageURL}
			alt={data.meta.headerImageAlt}
			class="opacity-30 dark:opacity-60"
		/>
		<div class="absolute bottom-0 bg-opacity-40 p-4">
			<div class="flex items-center justify-between">
				<ArticleTags categories={data.meta.categories} />
				<ArticlePublishedDate publishedDate={data.meta.date} />
			</div>
			<h1 class="text-4xl">{data.meta.title}</h1>
		</div>
	</header>
	<section id="content" class="prose prose-lg p-4 dark:prose-invert">
		<svelte:component this={data.content} />
	</section>
</article>
