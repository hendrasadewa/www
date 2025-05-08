<script lang="ts">
	import clsx from 'clsx';
	import { cubicInOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';

	let isExpanded = $state(false);
	let { disabled = false, toggle, children } = $props();

	let container: HTMLDivElement;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}

	function handleClickOutside(event: MouseEvent) {
		if (!container.contains(event.target as Node)) {
			isExpanded = false;
		}
	}
</script>

<svelte:window on:click={handleClickOutside} />

<div class="relative" bind:this={container}>
	<button
		onclick={toggleExpand}
		{disabled}
		class={clsx([
			'flex items-center justify-center rounded-lg p-1',
			'transition-colors',
			'hover:bg-blue-50',
			isExpanded ? 'bg-blue-200' : 'bg-none'
		])}
	>
		{@render toggle()}
	</button>
	{#if isExpanded}
		<div
			in:scale={{ start: 0.2, easing: cubicInOut }}
			out:fade
			class={clsx([
				'absolute top-10 z-20',
				'flex flex-col gap-2',
				'max-h-[480px] min-w-[240px]',
				'overflow-y-scroll',
				'p-1',
				'bg-stone-50 shadow-lg',
				'rounded border',
				'origin-top-left'
			])}
		>
			{@render children()}
		</div>
	{/if}
</div>
