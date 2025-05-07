<script lang="ts">
	import clsx from 'clsx';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import TableRecordCounter from './TableRecordCounter.svelte';

	export let isLoading = false;
	export let isTableEmpty = false;
</script>

<div
	class={clsx(
		'sticky bottom-0 left-0 z-40',
		'h-10 p-2',
		'shadow-sm',
		'border border-b-0  dark:border-0',
		'bg-stone-100 dark:bg-stone-800/70',
		'flex items-center justify-between'
	)}
>
	{#if isLoading}
		<div class="flex items-center gap-1">
			<LoaderCircle size="16" class="animate-spin" />
			Loading data...
		</div>
	{:else if isTableEmpty}
		<div></div>
	{:else}
		<slot />
	{/if}
</div>
