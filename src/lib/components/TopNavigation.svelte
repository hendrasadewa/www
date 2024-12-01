<script>
	// props
	export let href = '/';
	export let showChevron = true;
	export let title = 'Home';

	function handleTitleClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

<div class="sticky top-0 w-full border-b bg-white p-2 px-4">
	<nav class="flex items-center gap-2 text-lg">
		{#if showChevron}
			<a {href}> Back </a>
		{/if}
		<button on:click={handleTitleClick}>
			<span>
				{title}
			</span>
		</button>
	</nav>
</div>
