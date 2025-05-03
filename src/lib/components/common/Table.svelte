<script lang="ts">
	import type { RowData } from '$lib/types/csv';

	import TableHeader from './TableHeader.svelte';
	import TableFooter from './TableFooter.svelte';
	import TableView from './TableView.svelte';

	interface Props {
		fields: string[];
		records: RowData[];
		startIndex: number;
		endIndex: number;
		totalRecords: number;
		isLoading: boolean;
		onNextClick(): void;
		onPrevClick(): void;
		onExportJSONClick(): void;
		onExportTextClick(): void;
	}

	let {
		records,
		fields,
		isLoading,
		startIndex,
		endIndex,
		totalRecords,
		onNextClick,
		onPrevClick,
		onExportJSONClick = () => {},
		onExportTextClick = () => {}
	}: Props = $props();

	let isTableEmpty = $derived(records.length <= 0);
</script>

<div class="flex h-full flex-col justify-between dark:bg-stone-900">
	<TableHeader
		{isTableEmpty}
		{onNextClick}
		{onPrevClick}
		{onExportJSONClick}
		{onExportTextClick}
	/>
	{#if !isTableEmpty}
		<TableView {fields} {records} {isLoading} />
	{:else}
		<div class="flex h-full w-full items-center justify-center">
			<p class="text-2xl font-bold text-gray-400">No file selected</p>
		</div>
	{/if}
	<TableFooter
		{isTableEmpty}
		{isLoading}
		{startIndex}
		{endIndex}
		{totalRecords}
	/>
</div>
