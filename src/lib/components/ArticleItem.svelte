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
			<div class="space-y-2">
				<h3 class=" text-xl font-bold">
					{post.title}
				</h3>
				<p class="hidden md:block">
					{post.description}
				</p>
			</div>
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
