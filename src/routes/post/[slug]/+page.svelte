<script lang="ts">
	import Seo from '$lib/components/common/SEO.svelte';
	import ArticleHeader from '$lib/components/blog/ArticleHeader.svelte';

	export let data;
</script>

<Seo
	categories={['about']}
	description={data.meta.description}
	title={data.meta.title}
	headerImageAlt={data.meta.headerImageAlt}
	headerImageURL={data.meta.headerImageURL}
/>

<article class="mb-12 mt-6">
	<ArticleHeader
		headerImageURL={data.meta.headerImageURL}
		headerImageAlt={data.meta.headerImageAlt}
		categories={data.meta.categories}
		date={data.meta.date}
		description={data.meta.description}
		title={data.meta.title}
	/>
	<section
		id="content"
		class="prose prose-lg p-4 dark:prose-invert prose-headings:font-display prose-headings:font-normal prose-img:rounded-lg prose-img:shadow-lg"
	>
		<svelte:component this={data.content} />
	</section>
</article>
