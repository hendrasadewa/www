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
	<hr />
	<section id="posts">
		<ul class="space-y-4">
			{#each rest as post}
				<li class="pb-2">
					<ArticleItem {post} />
				</li>
			{/each}
		</ul>
	</section>
</div>
