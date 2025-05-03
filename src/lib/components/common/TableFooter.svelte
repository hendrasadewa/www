<script lang="ts">
	import clsx from 'clsx';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';
	import { numberFormatter } from '$lib/utils/formatters';

	interface Props {
		isLoading: boolean;
		isTableEmpty: boolean;
		startIndex: number;
		endIndex: number;
		totalRecords: number;
	}

	let {
		startIndex = 0,
		endIndex = 0,
		totalRecords = 0,
		isLoading = false,
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
			Loading data...
		</div>
	{:else if isTableEmpty}
		<div></div>
	{:else}
		<div>
			<p>
				Displaying
				<span class="font-mono">
					{numberFormatter.format(startIndex + 1)}
				</span>
				-
				<span class="font-mono">
					{numberFormatter.format(endIndex)}
				</span>
				of
				<span class="font-mono">
					{numberFormatter.format(totalRecords)}
				</span>
			</p>
		</div>
	{/if}
</div>
