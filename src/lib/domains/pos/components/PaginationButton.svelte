<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { cn } from '$lib/commons/utils/css-utils';

	let { currentPage = 0, index = 0, onClick = (index = 0) => {} } = $props();

	function onclick() {
		onClick(index + 1);
	}
</script>

<button
	{onclick}
	class={cn([
		'px-3 py-1',
		'cursor-pointer',
		'rounded',
		currentPage == index + 1
			? 'bg-stone-800/70 text-white dark:bg-white/70 dark:text-stone-800'
			: 'bg-none'
	])}
>
	{index + 1}
</button>
