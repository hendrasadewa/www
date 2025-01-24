<script>
	import socialInfo from '$lib/configs/socialInfo';
</script>

<header
	class="sticky top-0 z-10 w-full bg-stone-100/70 px-4 backdrop-blur-sm dark:bg-stone-800/70"
>
	<nav class="m-auto flex max-w-screen-md items-center justify-between py-4">
		<div class="flex items-center gap-2">
			<a class="font-bold" href="/">Hendra Sadewa</a> |
			<a class="" href="/about">About</a>
		</div>
		<div class="flex items-center gap-2">
			{#each socialInfo as item}
				<a href={item.url}>{item.name}</a>
			{/each}
		</div>
	</nav>
</header>
