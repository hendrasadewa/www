<script lang="ts">
	import { page } from '$app/state';
	import type { ProductCategory } from '../entity/product.entity';
	import CategoryItem from './CategoryItem.svelte';

	const activeSlug = $derived(page.url.searchParams.get('category'));

	let { categories = [] }: { categories?: ProductCategory[] } = $props();
</script>

<ul class="space-y-2">
	<li>
		<CategoryItem {activeSlug} name="Everything" slug="" />
	</li>
	{#each categories as { name, slug }}
		<li>
			<CategoryItem {activeSlug} {name} {slug} />
		</li>
	{/each}
</ul>
