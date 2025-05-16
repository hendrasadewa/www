<script lang="ts">
	import { blur } from 'svelte/transition';
	import LoaderPinwheelIcon from 'lucide-svelte/icons/loader-pinwheel';
	
	import { cn } from '$lib/utils/cssUtils';

	export let isLoading = false;
	export let message = 'Loading...';
</script>

{#if isLoading}
	<div
		transition:blur
		class={cn([
			'flex items-center justify-center',
			'absolute m-auto',
			'h-full w-full',
			'backdrop-blur-xs',
			'bg-stone-50/70 dark:bg-stone-600/70',
			'z-50'
		])}
	>
		<div
			class={cn([
				'h-14 min-w-40 rounded-full px-6 py-4 ',
				'bg-stone-50 dark:bg-stone-800',
				'shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl'
			])}
		>
			<div class="flex items-center justify-center gap-2">
				<LoaderPinwheelIcon class="animate-spin hover:animate-none" />
				<span class="text-center">{message}</span>
			</div>
		</div>
	</div>
{/if}
