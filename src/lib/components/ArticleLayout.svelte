<script lang="ts">
	import ArticleHeader from '$lib/components/ArticleHeader.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import siteInfo from '$lib/configs/siteInfo.js';

	let {
		children,
		description,
		headerImageURL,
		headerImageAlt = 'header',
		title,
		categories,
		date
	} = $props();
</script>

<Seo
	categories={['about']}
	{description}
	{title}
	{headerImageAlt}
	{headerImageURL}
/>

<article>
	<ArticleHeader
		{headerImageURL}
		{headerImageAlt}
		{categories}
		{date}
		{title}
	/>
	<section
		id="content"
		class="prose-headings:font-display prose prose-lg p-4 dark:prose-invert prose-headings:font-normal"
	>
		{@render children()}
	</section>
</article>
