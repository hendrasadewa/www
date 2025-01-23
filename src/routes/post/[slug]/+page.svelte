<script lang="ts">
	import Seo from '$lib/components/common/SEO.svelte';
	import ArticleHeader from '$lib/components/blog/ArticleHeader.svelte';
	import siteInfo from '$lib/configs/siteInfo.js';
	import { PencilIcon } from 'lucide-svelte';

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
	<hr class="my-2" />
	<div class="m-4 my-8">
		<div class="flex items-center gap-4">
			<img
				src="/img/me.webp"
				alt="author"
				class="h-16 w-16 content-center rounded-full border object-cover"
			/>
			<div class="flex flex-col gap-1">
				<span class="text-lg">Written by {siteInfo.author}</span>
				<span class="text-gray-600 dark:text-gray-400">
					{siteInfo.defaultDescription}
				</span>
			</div>
		</div>
	</div>
</article>
