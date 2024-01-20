<script lang="ts">
	import type { PostInfo } from '$lib/types/blog';
	export let data: { posts: PostInfo[] } = { posts: [] };
</script>

{#each data.posts as post}
	<div
		class="mb-3 border-l-4 border-l-zanah-300 rounded p-2 shadow bg-spring-wood-50"
	>
		<a href={post.path}>
			<span class="font-mono text-sm text-zanah-800">
				{post.metadata.date}
			</span>
			<h2 class="text-lg">{post.metadata.title}</h2>
			<p class="text-sm">{post.metadata.description}</p>
		</a>
	</div>
{/each}
