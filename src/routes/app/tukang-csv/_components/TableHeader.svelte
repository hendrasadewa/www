<script lang="ts">
	import { cn } from '$lib/utils/cssUtils';
	export let isTableEmpty = true;
</script>

<header
	class={cn([
		'min-h-14 p-2',
		'border border-t-0 dark:border-0',
		'flex items-center justify-between',
		isTableEmpty
			? 'bg-stone-100 dark:bg-stone-800'
			: 'bg-stone-50/70 dark:bg-stone-800/70'
	])}
>
	<slot />
</header>
