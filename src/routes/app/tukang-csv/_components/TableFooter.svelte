<script lang="ts">
	import { cn } from '$lib/utils/cssUtils';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let isLoading = false;
</script>

<div
	class={cn(
		'sticky bottom-0 left-0 z-40',
		'min-h-10 p-2',
		'shadow-sm',
		'border border-b-0  dark:border-0',
		'bg-stone-100 dark:bg-stone-800/70',
		'flex items-center gap-2'
	)}
>
	{#if isLoading}
		<div class="flex items-center gap-1">
			<LoaderCircle size="16" class="animate-spin" />
			Loading data...
		</div>
	{:else}
		<slot />
	{/if}
</div>
