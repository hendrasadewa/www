<script lang="ts">
	import { SEO } from '$lib/view/SEO';
	import { ArticleHeader, Author } from '$lib/view/Blog';
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

<article class="mt-6 mb-12">
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
			'transition-all',
			// prose configs
			'prose prose-lg',
			'prose-headings:font-display',

			'prose-a:hover:text-blue-500',
			// image
			'prose-img:rounded-lg',
			'prose-img:transition-all',
			'prose-img:shadow prose-img:hover:shadow-xl',
			'prose-img:hover:-translate-y-3',
			// blockquote
			'prose-blockquote:font-normal',
			'dark:prose-invert'
		])}
	>
		<svelte:component this={data.content} />
	</section>

	<div class="my-8 flex w-full justify-center">
		<Author />
	</div>
</article>
