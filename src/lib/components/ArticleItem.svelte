<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { LucideCalendar } from 'lucide-svelte';
	import ArticleTags from './ArticleTags.svelte';
	import ArticlePublishedDate from './ArticlePublishedDate.svelte';

	export let post: Post;
</script>

<article>
	<a class="" href="/post/{post.slug}">
		<header class="flex items-center justify-between gap-3">
			<h3 class=" text-xl">
				{post.title}
			</h3>
			<img
				src={post.headerImageURL}
				alt={post.headerImageAlt}
				class="w-1/3 rounded-lg object-cover"
			/>
		</header>
	</a>
	<footer class="flex items-center justify-between gap-3">
		<ArticleTags categories={post.categories} />
		<ArticlePublishedDate publishedDate={post.date} />
	</footer>
</article>
