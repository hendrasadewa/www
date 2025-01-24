<script lang="ts">
	import { PencilIcon } from 'lucide-svelte';
	import siteInfo from '$lib/configs/siteInfo';

	import ArticlePublishedDate from './ArticlePublishedDate.svelte';
	import ArticleTags from './ArticleTags.svelte';
	import BskyLikeCount from '../bsky/BskyLikeCount.svelte';

	export let headerImageURL: string = '';
	export let headerImageAlt: string = '';
	export let categories: string[] = [];
	export let description: string = '';
	export let date: string = '';
	export let title: string = '';
	export let url: string = '';
	export let bskyPostURI: string = '';
</script>

<article
	class="flex flex-col-reverse items-center justify-between gap-4 rounded-lg bg-none px-4 py-6 md:flex-row md:bg-stone-100 md:px-6 dark:bg-stone-700"
>
	<header class="flex w-full flex-col justify-between gap-4 md:min-h-64">
		<ArticleTags {categories} />
		<a href={url}>
			<h2 class=" cursor-pointer font-display text-3xl md:text-5xl">
				{title}
			</h2>
		</a>
		<p class="md:text-md text-sm italic">&quot;{description}&quot;</p>
		<div class="flex items-center gap-2">
			<ArticlePublishedDate publishedDate={date} />
			<div class="flex items-center gap-1">
				<PencilIcon size="12" />
				<a
					href="https://bsky.app/profile/hendrasadewa.com"
					class="md:text-md text-xs"
				>
					{siteInfo.author}
				</a>
			</div>
			{#if bskyPostURI}
				<BskyLikeCount postURI={bskyPostURI} />
			{/if}
		</div>
	</header>
	<a href={url}>
		<img
			alt={headerImageAlt}
			src={headerImageURL}
			class="max-h-60 max-w-60 rotate-6 cursor-pointer rounded-lg shadow transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl md:h-64 md:w-64"
		/>
	</a>
</article>
