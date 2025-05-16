<script>
	import { cn } from '$lib/commons/utils/css-utils';
	let { children } = $props();
</script>

<header
	class={cn(
		'sticky top-0 z-20',
		'px-4 py-1',
		'shadow-xs backdrop-blur-xs',
		'bg-stone-100/70 dark:bg-stone-800/70',
		'text-sm'
	)}
>
	<nav class="flex w-full items-center justify-between">
		{@render children()}
	</nav>
</header>
