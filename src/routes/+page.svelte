<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';
	import type { PostInfo } from '$lib/types/blog';
	export let data: { posts: PostInfo[] } = { posts: [] };
</script>

<PostList {data} />
