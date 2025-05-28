<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Post } from '$lib/commons/entity/blog.entity';
	import { cn } from '$lib/commons/utils/css-utils';

	import ArticlePublishedDate from './ArticlePublishedDate.svelte';
	import ArticleTags from './ArticleTags.svelte';

	export let post: Post;

	function onElementClick() {
		goto(`/post/${post.slug}`);
	}
</script>

<article class="min-h-42">
	<div class="flex h-full justify-between">
		<div class="flex h-full w-full flex-col justify-between gap-3">
			<header>
				<a href="/post/{post.slug}" class="flex flex-col gap-3">
					<h2 class="font-display text-2xl md:text-3xl">
						{post.title}
					</h2>
					<h3 class="text-md max-w-5/6 text-stone-500 dark:text-stone-300">
						{post.description}
					</h3>
				</a>
			</header>
			<footer>
				<ArticlePublishedDate publishedDate={post.date} />
			</footer>
		</div>
		<button
			class="flex h-full min-w-40 cursor-pointer items-center justify-center"
			type="button"
			on:click={onElementClick}
		>
			<img
				src={post.headerImageURL}
				alt={post.headerImageAlt}
				class={cn([
					'transition-all hover:rotate-6 hover:shadow-lg',
					'h-42 w-42 rounded-lg shadow-sm'
				])}
			/>
		</button>
	</div>
</article>
