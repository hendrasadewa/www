<script lang="ts">
	import { numberFormatter } from '$lib/utils/formatters';

	export let startIndex = 0;
	export let endIndex = 0;
	export let totalRecords = 0;
</script>

{#if totalRecords > 0}
	<div class="flex items-center justify-between gap-1">
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
