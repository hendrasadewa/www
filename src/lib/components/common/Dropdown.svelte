<script lang="ts">
	import { cn } from '$lib/utils/cssUtils';
	import { cubicInOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';

	let isExpanded = $state(false);
	let { disabled = false, toggle, children, align = 'right' } = $props(); // added `align`

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
	<button
		onclick={toggleExpand}
		{disabled}
		class={cn([
			'flex items-center justify-center rounded-lg p-1',
			'transition-colors',
			'hover:bg-blue-50 dark:hover:bg-stone-700',
			'disabled:text-blue-200 disabled:dark:text-blue-100/40',
			isExpanded ? 'bg-blue-200' : 'bg-none'
		])}
	>
		{@render toggle()}
	</button>
	{#if isExpanded}
		<div
			in:scale={{ start: 0.2, easing: cubicInOut }}
			out:fade
			class={cn([
				'absolute top-full z-20 mt-2',
				'flex flex-col gap-2',
				'max-h-[480px] min-w-[240px]',
				'overflow-y-scroll',
				'p-1',
				'bg-stone-50 shadow-lg dark:bg-stone-800',
				'rounded border dark:border-0',
				dropdownPosition
			])}
		>
			{@render children()}
		</div>
	{/if}
</div>
