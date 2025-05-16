<script lang="ts">
	import type { Post } from '$lib/entity/blog.entity';
	import ArticleItem from './ArticleItem.svelte';

	export let posts: Post[] = [];
</script>

<ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
	{#each posts as post}
		<li>
			<ArticleItem {post} />
		</li>
	{/each}
</ul>
