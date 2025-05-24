<script lang="ts">
	import { goto } from '$app/navigation';
	import { page as pageState } from '$app/state';

	import { SEO } from '$lib/commons/components/SEO';
	import Pagination from '$lib/domains/pos/components/Pagination.svelte';
	import ProductList from '$lib/domains/pos/components/ProductList.svelte';
	import { productStoreActions } from '$lib/domains/pos/stores/product.svelte';

	let category = $derived(pageState.url.searchParams.get('category') || '');
	let q = $derived(pageState.url.searchParams.get('q') || '');

	let perPage = $derived(
		parseInt(pageState.url.searchParams.get('per_page') || '') || 15
	);
	let page = $derived(
		parseInt(pageState.url.searchParams.get('page') || '') || 1
	);

	let limit = $derived(perPage <= 30 ? perPage : 30);
	let skip = $derived((page - 1) * limit);

	let title = $derived.by(() => {
		if (category) {
			return category;
		}
		if (q) {
			return `Results for "${q}"`;
		}
		return 'Everything';
	});

	// Event handlers
	function onPageClick(index: number) {
		pageState.url.searchParams.set('page', String(index + 1));
		goto(pageState.url, { replaceState: true, noScroll: true });
	}
</script>

<SEO
	categories={['Apps', 'POS']}
	description="POS - DummyJSON eCommerce implementation"
	title="Apps | POS - DummyJSON"
/>

{#await productStoreActions.get(limit, skip, category, q)}
	<p>loading...</p>
{:then { products, total }}
	<header class="mt-2 mb-3 min-h-20">
		<h1>
			<span class="font-display text-4xl capitalize">
				{title}
			</span>
			<sup class="font-mono text-xl">({total})</sup>
		</h1>
	</header>

	<ProductList {products} {total} {title} />
	<div class="mt-2 py-2">
		<Pagination currentPage={page} {onPageClick} {perPage} {total} />
	</div>
{/await}
