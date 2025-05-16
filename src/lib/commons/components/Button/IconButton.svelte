<!-- IconButton.svelte -->
<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import type { ComponentType, SvelteComponent } from 'svelte';

	// Props
	export let icon: ComponentType<SvelteComponent> | null = null;
	export let onClick: () => void = () => {};
	export let disabled: boolean = false;
	export let size: number = 18;
	export let iconClass: string = '';
	export let variant: 'default' | 'primary' | 'secondary' = 'default';
	export let hoverEffect: boolean = true;

	// Variants
	const variantClasses = {
		default: '',
		primary: 'bg-blue-100 dark:bg-blue-900/30',
		secondary: 'bg-stone-100 dark:bg-stone-800'
	};

	$: buttonClass = cn(
		'flex items-center justify-center rounded-lg p-1',
		disabled ? 'cursor-not-allowed' : 'cursor-pointer',
		hoverEffect && !disabled && 'hover:bg-stone-200 dark:hover:bg-stone-700',
		variantClasses[variant] || ''
	);

	$: iconClassFinal = cn(
		iconClass,
		disabled ? 'text-blue-200 dark:text-blue-100/40' : 'text-blue-500'
	);
</script>

<button on:click={onClick} {disabled} class={buttonClass} {...$$restProps}>
	{#if icon}
		<svelte:component this={icon} {size} class={iconClassFinal} />
	{/if}
	<slot />
</button>
