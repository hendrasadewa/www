<script lang="ts">
	import ArticleList from '$lib/components/blog/ArticleList.svelte';

	export let data;
</script>

<article class="px-4 sm:px-0">
	<section class="space-y-2">
		<form
			onsubmit={(e) => {
				e.preventDefault();
				const formData = new FormData(e.target as HTMLFormElement);
				console.log({ formData });
			}}
		>
			<div>
				<label id="search">
					<span>Search</span>
					<input type="search" id="search" />
				</label>
			</div>
		</form>
		<ArticleList posts={data.posts} />
	</section>
</article>
