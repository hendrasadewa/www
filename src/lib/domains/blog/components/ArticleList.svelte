<script lang="ts">
	import type { Post } from '$lib/commons/entity/blog.entity';
	import ArticleItem from './ArticleItem.svelte';

	export let posts: Post[] = [];
</script>

<ul class="space-y-12 p-4">
	{#each posts as post}
		<li>
			<ArticleItem {post} />
		</li>
	{/each}
</ul>
