<script lang="ts">
	import { SEO } from '$lib/components/features/SEO';
	import { ArticleHeader, Author } from '$lib/components/features/Blog';
	import { cn } from '$lib/utils/cssUtils';

	export let data;
</script>

<SEO
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
		bskyPostURI={data.meta.bskyURI}
	/>

	<section
		id="content"
		class={cn([
			'p-4',
			'prose prose-lg',
			'prose-headings:font-display prose-headings:font-normal',
			'prose-img:rounded-lg prose-img:shadow-lg',
			'dark:prose-invert'
		])}
	>
		<svelte:component this={data.content} />
	</section>

	<div class="my-8 flex w-full justify-center">
		<Author />
	</div>
</article>
