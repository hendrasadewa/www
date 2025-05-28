<script>
	import PaginationButton from './PaginationButton.svelte';
	let {
		total = 0,
		currentPage = 1,
		perPage = 15,
		onPageClick = (index = 0) => {}
	} = $props();

	let totalPage = $derived(Math.floor(total / perPage));
	let pageIndexes = $derived([...new Array(totalPage)]);
</script>

<nav class="border-t border-stone-200 py-2">
	<ul class="flex w-full items-center justify-center gap-2">
		{#each pageIndexes as _, index}
			<PaginationButton {index} {currentPage} onClick={onPageClick} />
		{/each}
	</ul>
</nav>
