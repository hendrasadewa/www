<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { IconProps } from 'lucide-svelte';
	import type { Component } from 'svelte';

	import { cn } from '$lib/utils/css-utils';

	interface Props extends HTMLButtonAttributes {
		iconLeft?: Component<IconProps>;
	}

	let { iconLeft: IconLeft, children, ...rest }: Props = $props();
</script>

<button
	disabled={rest.disabled}
	class={cn([
		// Outer shell
		'relative inline-flex items-center justify-center rounded-md',
		'bg-linear-to-b from-white/40 to-white/5',
		'shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_5px_rgba(0,0,0,0.2)]',
		'transition active:translate-y-px active:shadow-inner',

		// Disabled
		rest.disabled && 'pointer-events-none cursor-not-allowed opacity-50'
	])}
	{...rest}
>
	<div
		class={cn([
			'rounded-md px-3 py-1.5 text-sm font-medium text-white',
			'flex h-full w-full items-center justify-center gap-1',
			'transition-colors duration-150 ease-in-out',

			// Focus
			'focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-hidden',

			// Base state (default blue)
			'bg-blue-500 hover:bg-blue-600 active:bg-blue-700',

			// Danger state

			// Disabled inner state (no hover or active)
			rest.disabled && 'cursor-not-allowed bg-gray-400! text-white!'
		])}
	>
		{#if IconLeft}
			<IconLeft size="13" />
		{/if}
		{@render children?.()}
	</div>
</button>
