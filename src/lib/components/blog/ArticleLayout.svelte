<script lang="ts">
	import Seo from '$lib/components/common/SEO.svelte';
	import ArticleHeader from './ArticleHeader.svelte';

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

<section id="header">
	<ArticleHeader
		{headerImageURL}
		{headerImageAlt}
		{description}
		{categories}
		{date}
		{title}
	/>
</section>

<section
	id="content"
	class="prose prose-lg p-4 dark:prose-invert prose-headings:font-display prose-headings:font-normal"
>
	{@render children()}
</section>
