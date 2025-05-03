<script lang="ts">
	import { numberFormatter } from '$lib/utils/formatters';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let total = 0;
	export let isLoading = false;
	export let startIndex = 0;
	export let endIndex = 0;
</script>

{#if isLoading}
	<div class="flex items-center gap-1">
		<LoaderCircle size="16" class="animate-spin" />
		Parsing data...
	</div>
{:else}
	<div>
		<p>
			Displaying
			<span class="font-mono">{numberFormatter.format(startIndex)}</span>
			-
			<span class="font-mono">{numberFormatter.format(endIndex)}</span>
			of
			<span class="font-mono">{numberFormatter.format(total)}</span>
		</p>
	</div>
{/if}
