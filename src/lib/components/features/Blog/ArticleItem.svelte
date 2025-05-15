<script lang="ts">
	import type { Post } from '$lib/types/post';
	import ArticlePublishedDate from './ArticlePublishedDate.svelte';

	export let post: Post;
</script>

<article>
	<a class="" href="/post/{post.slug}">
		<header class="flex flex-col items-center justify-between gap-3">
			<img
				src={post.headerImageURL}
				alt={post.headerImageAlt}
				class="h-40 w-40 rounded-lg shadow-sm transition-all hover:rotate-6 hover:shadow-lg md:h-48 md:w-48"
			/>
			<h3 class="text-center">{post.title}</h3>
			<ArticlePublishedDate publishedDate={post.date} />
		</header>
	</a>
</article>
