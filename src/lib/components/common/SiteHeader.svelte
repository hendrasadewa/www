<script>
	import { page } from '$app/stores';
	import socialInfo from '$lib/configs/socialInfo';
	import clsx from 'clsx';

	let paths = $page.url.pathname.split('/').filter(Boolean);
</script>

<header
	class={clsx(
		'sticky top-0 z-10',
		'h-14 px-4 py-2',
		'shadow-sm backdrop-blur-sm',
		'bg-stone-100/70 dark:bg-stone-800/70'
	)}
>
	<nav class="flex items-center justify-between py-4">
		<div class="flex items-center gap-2">
			<a class="font-bold" href="/">Hendra Sadewa</a>
		</div>
		<div class="flex items-center gap-3">
			<a class="" href="/post">post</a>
			<a class="" href="/about">about</a>
			<a class="" href="/app">app</a>
			{#each socialInfo as item}
				<a href={item.url}>{item.name}</a>
			{/each}
		</div>
	</nav>
</header>
