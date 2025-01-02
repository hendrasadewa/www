<script lang="ts">
	import ArticlePublishedDate from './ArticlePublishedDate.svelte';
	import ArticleTags from './ArticleTags.svelte';

	export let headerImageURL: string = '';
	export let headerImageAlt: string = '';
	export let categories: string[] = [];
	export let description: string = '';
	export let date: string = '';
	export let title: string = '';
</script>

<article
	class="flex flex-col-reverse items-center justify-between gap-4 rounded-lg bg-stone-100 p-4 py-6 md:flex-row dark:bg-stone-700"
>
	<header class="flex w-full flex-col justify-between gap-4 md:min-h-64">
		<ArticleTags {categories} />
		<h2
			class=" cursor-pointer font-display text-3xl hover:text-stone-600 md:text-5xl"
		>
			{title}
		</h2>
		<p class="md:text-md text-sm italic">&quot;{description}&quot;</p>
		<ArticlePublishedDate publishedDate={date} />
	</header>
	<img
		alt={headerImageAlt}
		src={headerImageURL}
		class="rotate-6 cursor-pointer rounded-lg shadow transition-all hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl md:h-64 md:w-64"
	/>
</article>
