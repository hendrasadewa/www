<script lang="ts">
	import { PackageOpenIcon } from 'lucide-svelte';

	import { page } from '$app/stores';
	import ArticleList from '$lib/components/blog/ArticleList.svelte';
	import ArticleSearchInput from '$lib/components/blog/ArticleSearchInput.svelte';

	const keyword = $page.url.searchParams.get('keyword');
	let { data } = $props();
</script>

<article class="px-4 sm:px-0">
	<section class="space-y-4 py-2">
		<ArticleSearchInput />
		{#if data.posts.length > 0}
			<ArticleList posts={data.posts} />
		{:else if data.posts.length === 0 && keyword}
			<div class="flex flex-col items-center gap-2">
				<PackageOpenIcon size={24} />
				<div class="space-y-1">
					<h2 class="text-center text-lg">Artikel tidak ditemukan</h2>
					<p class="text-center">
						Kami tidak dapat menemukan artikel dengan "{keyword}", mohon gunakan
						kata kunci lainnya.
					</p>
				</div>
			</div>
		{:else}
			<div class="flex flex-col items-center">
				<PackageOpenIcon size={24} />
				<p>Silahkan masukan kata pencarian di input teks</p>
			</div>
		{/if}
	</section>
</article>
