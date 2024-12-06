<script lang="ts">
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import Seo from '$lib/components/SEO.svelte';

	export let data;
</script>

<Seo
	categories={['about']}
	description={data.meta.description}
	title={data.meta.title}
	headerImageAlt={data.meta.headerImageAlt}
	headerImageURL={data.meta.headerImageURL}
/>

<article>
	<ArticleHeader
		headerImageURL={data.meta.headerImageURL}
		headerImageAlt={data.meta.headerImageAlt}
		categories={data.meta.categories}
		date={data.meta.date}
		title={data.meta.title}
	/>
	<section
		id="content"
		class="prose prose-lg p-4 dark:prose-invert prose-headings:font-display prose-headings:font-normal"
	>
		<svelte:component this={data.content} />
	</section>
</article>
