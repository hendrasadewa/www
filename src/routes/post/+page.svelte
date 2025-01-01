<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';

	export let data;
</script>

<article class="px-4 sm:px-0">
	<section class="space-y-2">
		<h1 class="font-display text-4xl">Artikel Terbaru</h1>
		<ArticleList posts={data.posts} />
	</section>
</article>
