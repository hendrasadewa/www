<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { IconProps } from 'lucide-svelte';
	import type { Component } from 'svelte';

	import { cn } from '$lib/commons/utils/css-utils';

	interface Props extends HTMLButtonAttributes {
		iconLeft?: Component<IconProps>;
		variant?: 'solid' | 'ghost';
	}

	let {
		iconLeft: IconLeft,
		children,
		variant = 'ghost',
		...rest
	}: Props = $props();
</script>

<button
	disabled={rest.disabled}
	class={cn([
		'cursor-pointer',
		// Outer shell
		'relative inline-flex items-center justify-center rounded-md',
		'transition active:translate-y-px active:shadow-inner',
		// Disabled
		rest.disabled && 'pointer-events-none cursor-not-allowed opacity-50'
	])}
	{...rest}
>
	<div
		class={cn([
			'rounded-md px-3 py-1.5 text-sm font-medium ',
			'flex h-full w-full items-center justify-center gap-1',
			'transition-colors duration-150 ease-in-out',

			// Focus
			'focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-hidden',

			// Base state (default blue)
			variant == 'solid' &&
				'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
			variant == 'ghost' &&
				'bg-transparent hover:bg-stone-200 active:bg-blue-200 dark:hover:bg-stone-700'
		])}
	>
		{#if IconLeft}
			<IconLeft
				size="13"
				className={cn([
					rest.disabled
						? 'text-blue-200 dark:text-blue-100/40'
						: 'text-blue-500'
				])}
			/>
		{/if}
		{@render children?.()}
	</div>
</button>
