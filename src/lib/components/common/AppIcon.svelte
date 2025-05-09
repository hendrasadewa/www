<script lang="ts">
	import { cn } from '$lib/utils/cssUtils';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let icon: ComponentType<SvelteComponent> | null = null;
	export let name: string = '';
</script>

<div class={cn(['flex flex-col items-center', 'gap-2'])}>
	<div
		class={cn([
			'flex items-center justify-center',
			'h-14 w-14',
			'rounded-xl border',
			'p-2',
			'transition-shadow hover:shadow-lg',
			'bg-gradient-to-tr from-gray-50 to-gray-100'
		])}
	>
		{#if icon}
			<svelte:component this={icon} class={cn(['text-gray-500'])} />
		{/if}
	</div>
	<span class={cn(['text-center text-xs text-gray-700'])}>
		{name}
	</span>
</div>
