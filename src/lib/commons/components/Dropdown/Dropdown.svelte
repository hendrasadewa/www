<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { cn } from '$lib/commons/utils/css-utils';

	import { Button } from '../Button';

	let isExpanded = $state(false);
	let { disabled = false, toggle, children, align = 'right' } = $props();

	let container: HTMLDivElement;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!container.contains(event.target as Node)) {
			isExpanded = false;
		}
	}

	const dropdownPosition = $derived(
		{
			left: 'left-0 origin-top-left',
			right: 'right-0 origin-top-right',
			center: 'left-1/2 -translate-x-1/2 origin-top'
		}[align]
	);
</script>

<svelte:window on:click={handleClickOutside} />

<div class="relative" bind:this={container}>
	<Button onclick={toggleExpand} {disabled}>
		{@render toggle()}
	</Button>

	{#if isExpanded}
		<div
			in:scale={{ start: 0.2, easing: cubicInOut }}
			out:fade
			class={cn([
				// Positioning
				'absolute top-full z-30 mt-2',
				dropdownPosition,

				// Layout
				'flex flex-col gap-2',
				'max-h-[480px] min-w-[240px] overflow-y-scroll',

				// Style
				'rounded-xl',
				'bg-stone-100 dark:bg-stone-800',
				'shadow-lg',

				// Spacing
				'p-1'
			])}
		>
			{@render children()}
		</div>
	{/if}
</div>
