<script lang="ts">
	import ArticlePublishedDate from './ArticlePublishedDate.svelte';
	import ArticleTags from './ArticleTags.svelte';

	export let headerImageURL: string = '';
	export let headerImageAlt: string = '';
	export let categories: string[] = [];
	export let date: string = '';
	export let title: string = '';
</script>

<header class="rounded-lg">
	<img
		src={headerImageURL}
		alt={headerImageAlt}
		class="bg-cover object-center md:rounded-lg dark:opacity-60"
	/>
	<div class="w-full">
		<div
			class="relative w-full rounded-b-lg bg-stone-100/70 p-4 backdrop-blur-sm dark:bg-stone-800/70"
		>
			<div class="flex items-center justify-between">
				<ArticleTags {categories} />
				<ArticlePublishedDate publishedDate={date} />
			</div>
			<h1 class="font-display text-4xl">{title}</h1>
		</div>
	</div>
</header>
