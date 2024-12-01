<script lang="ts">
	import type { Post } from '$lib/types/post';

	import ArticleItem from './ArticleItem.svelte';
	import ArticleHighlightItem from './ArticleHighlightItem.svelte';

	export let posts: Post[] = [];

	let [highlighted, ...rest] = posts;
</script>

<div class="space-y-4">
	<section id="highlight">
		<ArticleHighlightItem post={highlighted} />
	</section>

	<section class="space-y-2" id="posts">
		<header class="mb-4 border-b py-2">
			<h2 class=" text-3xl font-bold">Latest Post</h2>
		</header>
		<ul>
			{#each rest as post}
				<li class="pb-2">
					<ArticleItem {post} />
				</li>
			{/each}
		</ul>
	</section>
</div>
