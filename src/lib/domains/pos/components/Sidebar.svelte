<script>
	import { productStoreActions } from '../stores/product.svelte';
	import CategoryList from './CategoryList.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<div class="space-y-4 rounded-lg">
	<section>
		<header class="min-h-24">
			<h2 class="font-display text-4xl font-bold">FakeMart</h2>
			<p class="text-sm">
				<span>Powered by</span>
				<a href="https://dummyjson.com" class="underline"> DummyJSON </a>
			</p>
		</header>
		<SearchInput />
	</section>
	<section class="space-y-2">
		<header>
			<h2 class="font-display text-2xl font-bold">Categories</h2>
		</header>
		<div class="overflow-y-scroll">
			{#await productStoreActions.getCategories()}
				<p>loading</p>
			{:then categories}
				<CategoryList {categories} />
			{/await}
		</div>
	</section>
</div>
