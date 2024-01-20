<script lang="ts">
	import type { PostInfo } from './types';
	export let data: { posts: PostInfo[] } = { posts: [] };
</script>

<h1 class="text-2xl py-2">Posts</h1>

{#each data.posts as post}
	<div class="mb-3 border-l-4 pl-2">
		<a href={post.path}>
			<span class="font-mono text-sm">{post.metadata.date}</span>
			<h2 class="text-lg">{post.metadata.title}</h2>
			<p class="text-sm text-gray-500">{post.metadata.description}</p>
		</a>
	</div>
{/each}
