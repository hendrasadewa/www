<script lang="ts">
	import clsx from 'clsx';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { numberFormatter } from '$lib/utils/formatters';
	import type { Pagination } from '$lib/types/table';

	interface Props {
		isLoading: boolean;
		isTableEmpty: boolean;
		pagination: Pagination;
	}

	let {
		pagination = $bindable(),
		isLoading = $bindable(),
		isTableEmpty = true
	}: Props = $props();
</script>

<div
	class={clsx(
		'sticky bottom-0 left-0 z-40',
		'h-10 p-2',
		'shadow-sm',
		'border border-b-0',
		'bg-stone-100 dark:bg-stone-800/70',
		'flex items-center justify-between'
	)}
>
	{#if isLoading}
		<div class="flex items-center gap-1">
			<LoaderCircle size="16" class="animate-spin" />
			Parsing data...
		</div>
	{:else if isTableEmpty}
		<div></div>
	{:else}
		<div>
			<p>
				Displaying
				<span class="font-mono">
					{numberFormatter.format(pagination.startIndex + 1)}
				</span>
				-
				<span class="font-mono">
					{numberFormatter.format(pagination.endIndex)}
				</span>
				of
				<span class="font-mono">
					{numberFormatter.format(pagination.totalRecords)}
				</span>
			</p>
		</div>
	{/if}
</div>
