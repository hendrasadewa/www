<script lang="ts">
	import clsx from 'clsx';
	import { blur } from 'svelte/transition';

	import type { RowData } from '$lib/types/csv';
	import BlockingLoader from '$lib/components/common/BlockingLoader.svelte';

	interface Props {
		records: RowData[];
		fields: string[];
		isLoading: boolean;
	}
	let { records = [], fields = [], isLoading = false }: Props = $props();
	console.log('tableview', { fields });
</script>

<div class="relative flex-1 overflow-scroll" transition:blur>
	<BlockingLoader {isLoading} />
	<table class="border-collapse rounded-lg border">
		<thead
			class={clsx(
				'sticky top-0 z-10',
				'shadow-lg',
				'border-y',
				'p-2',
				'shadow-sm backdrop-blur-sm',
				'bg-stone-100/70 dark:bg-stone-800/70'
			)}
		>
			<tr>
				{#each fields as field}
					<th class="text-nowrap border p-2">{field}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each records as record, index}
				<tr>
					{#each fields as field}
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
