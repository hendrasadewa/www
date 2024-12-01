<script lang="ts">
	import type { Post } from '$lib/types/post';
	import ArticleTags from './ArticleTags.svelte';
	import ArticlePublishedDate from './ArticlePublishedDate.svelte';

	export let post: Post;
</script>

<article>
	<img
		alt={post.headerImageAlt}
		src={post.headerImageURL}
		class="h-64 w-full rounded-lg object-cover shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
	/>
	<header class="py-2">
		<h2 class=" text-2xl">{post.title}</h2>
		<p>{post.description}</p>
	</header>
	<footer class="flex items-center justify-between gap-3">
		<ArticleTags categories={post.categories} />
		<ArticlePublishedDate publishedDate={post.date} />
	</footer>
</article>
