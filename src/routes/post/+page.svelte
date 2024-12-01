<script lang="ts">
	import ArticleList from "$lib/components/ArticleList.svelte";

	export let data;
</script>

<div class="px-2">
	<ArticleList posts={data.posts} />
</div>
