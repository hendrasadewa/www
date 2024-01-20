<script lang="ts">
	import PostList from '$lib/components/PostList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import type { PostInfo } from '$lib/types/blog';
	export let data: { posts: PostInfo[] } = { posts: [] };
</script>

<Seo title="hendrasadewa / Home" />

<header class="pt-8 pb-2 flex items-center gap-2">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
		/>
	</svg>
	<h1 class="text-2xl">Blog posts</h1>
</header>

<PostList {data} />
