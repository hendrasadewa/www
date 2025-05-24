<script lang="ts">
	import type { Product } from '../entity/product.entity';
	import ProductItem from './ProductItem.svelte';
	let {
		products = [],
		title = '',
		total = 0
	}: { products: Product[]; title?: string; total?: number } = $props();
</script>

<div class="grid grid-cols-2 gap-6 md:grid-cols-3">
	{#each products as product}
		<ProductItem {product} />
	{/each}
</div>
