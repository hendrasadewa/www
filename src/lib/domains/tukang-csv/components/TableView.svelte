<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import { blur } from 'svelte/transition';

	import type { RowData } from '$lib/entity/csv.entity';
	import { BlockingLoader } from '$lib/commons/components/Loader';

	export let records: RowData[] = [];
	export let fields: string[] = [];
	export let isLoading = false;
</script>

<div class="relative flex-1 overflow-scroll" transition:blur>
	<BlockingLoader {isLoading} />
	<table class="-collapse rounded-lg">
		<thead
			class={cn(
				'sticky top-0 z-10',
				'shadow-lg',
				'p-2',
				'shadow-xs backdrop-blur-xs',
				'bg-stone-100/70 dark:bg-stone-800/70'
			)}
		>
			<tr>
				{#each fields as field}
					<th class="p-2 text-nowrap">{field}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each records as record}
				<tr>
					{#each fields as field}
						<td
							class={cn([
								'px-3 py-2 text-nowrap ',
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
