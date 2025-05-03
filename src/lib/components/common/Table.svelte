<script lang="ts">
	import clsx from 'clsx';
	import { blur } from 'svelte/transition';

	import type { Pagination, TableInfo } from '$lib/types/table';

	import TableHeader from './TableHeader.svelte';
	import TableFooter from './TableFooter.svelte';

	interface Props {
		isLoading: boolean;
		title: string | undefined;
		tableInfo: TableInfo;
		pagination: Pagination;
		onNextClick(): void;
		onPrevClick(): void;
	}

	let {
		title = 'Untitled',
		isLoading = $bindable(),
		tableInfo = $bindable(),
		pagination = $bindable(),
		onNextClick,
		onPrevClick
	}: Props = $props();

	let isTableEmpty = $derived(tableInfo.records.length <= 0);
</script>

<div class="flex h-full flex-col justify-between dark:bg-stone-900">
	<TableHeader {isTableEmpty} {onNextClick} {onPrevClick} />
	{#if !isTableEmpty}
		<div class="flex-1 overflow-scroll" transition:blur>
			<table class="border-collapse rounded-lg border">
				<thead
					class={clsx(
						'sticky top-0 z-40',
						'shadow-lg',
						'border-y',
						'p-2',
						'shadow-sm backdrop-blur-sm',
						'bg-stone-100/70 dark:bg-stone-400/70'
					)}
				>
					<tr>
						<th class="text-nowrap border p-2">#</th>
						{#each tableInfo.fields as field}
							<th class="text-nowrap border p-2">{field}</th>
						{/each}
					</tr>
				</thead>
				<tbody>
					{#each tableInfo.records as record, index}
						<tr>
							<td
								class={clsx([
									'text-nowrap border px-3 py-2 text-center ',
									'hover:bg-stone-100 dark:hover:bg-stone-600',
									'hover:shadow-inner'
								])}
							>
								{index + 1 + pagination.startIndex}
							</td>
							{#each tableInfo.fields as field}
								<td
									class={clsx([
										'text-nowrap border px-3 py-2 ',
										'hover:bg-stone-100 dark:hover:bg-stone-600',
										'hover:shadow-inner'
									])}
								>
									{record[field]}
								</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="flex h-full w-full items-center justify-center">
			<p class="text-2xl font-bold text-gray-400">No file selected</p>
		</div>
	{/if}
	<TableFooter {isLoading} {pagination} />
</div>
