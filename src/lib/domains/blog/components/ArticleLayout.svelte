<script lang="ts">
	import { SEO } from '$lib/commons/components/SEO';
	import ArticleHeader from './ArticleHeader.svelte';

	let {
		children,
		description,
		headerImageURL,
		headerImageAlt = 'header',
		title,
		categories,
		date,
		bskyPostURI
	} = $props();
</script>

<SEO
	categories={['about']}
	{description}
	{title}
	{headerImageAlt}
	{headerImageURL}
/>
<div class="mx-auto w-full max-w-(--breakpoint-md)">
	<section id="header" class="py-2">
		<ArticleHeader
			{headerImageURL}
			{headerImageAlt}
			{description}
			{categories}
			{date}
			{title}
			{bskyPostURI}
		/>
	</section>

	<section
		id="content"
		class="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-normal p-4 font-serif"
	>
		{@render children()}
	</section>
</div>
