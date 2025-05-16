<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let icon: ComponentType<SvelteComponent> | null = null;
	export let name: string = '';
</script>

<div
	class={cn([
		'flex flex-col items-center',
		'gap-2',
		'text-stone-700 dark:text-stone-300'
	])}
>
	<div
		class={cn([
			'flex items-center justify-center',
			'h-14 w-14',
			'rounded-xl ',
			'p-2',
			'transition-shadow hover:shadow-lg',
			'bg-linear-to-tr from-stone-50 to-stone-200',
			'dark:from-stone-700 dark:to-stone-600'
		])}
	>
		{#if icon}
			<svelte:component this={icon} />
		{/if}
	</div>
	<span class={cn(['text-center text-xs '])}>
		{name}
	</span>
</div>
