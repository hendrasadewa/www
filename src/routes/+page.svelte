<script lang="ts">
	import ArticleList from '$lib/components/ArticleList.svelte';

	export let data;
</script>

<article class="px-4">
	<section class="space-y-2">
		<h1 class="text-4xl font-bold">Articles</h1>
		<ArticleList posts={data.posts} />
	</section>
</article>
