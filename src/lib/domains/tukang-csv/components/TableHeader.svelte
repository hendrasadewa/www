<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	export let isTableEmpty = true;
</script>

<header
	class={cn([
		'min-h-14 p-2',
		'flex items-center justify-between',
		isTableEmpty
			? 'bg-stone-100 dark:bg-stone-800'
			: 'bg-stone-50/70 dark:bg-stone-800/70'
	])}
>
	<slot />
</header>
