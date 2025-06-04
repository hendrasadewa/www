<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import XIcon from 'lucide-svelte/icons/x';

	import { Button } from '$lib/commons/components/Button';
	import { cn } from '$lib/commons/utils/css-utils';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	const {
		onCloseClick,
		children,
		title,
		isVisible = false
	}: {
		onCloseClick: MouseEventHandler<HTMLButtonElement>;
		children: Snippet;
		title?: Snippet;
		isVisible: boolean;
	} = $props();
</script>

{#if isVisible}
	<div
		class={cn([
			'absolute top-0 z-40 h-full min-h-screen w-full',
			'bg-stone-800/65 dark:bg-stone-800/65',
			'flex items-start justify-center',
			'p-4'
		])}
		transition:fade
	>
		<div
			class={cn([
				'flex flex-col shadow-xl',
				'bg-stone-50/90 dark:bg-stone-700/90',
				'w-full md:w-3/4',
				'rounded-xl'
			])}
			transition:scale
		>
			<header class="flex items-center justify-between p-2">
				{#if title}
					{@render title()}
				{/if}
				<Button onclick={onCloseClick}>
					<XIcon />
				</Button>
			</header>
			<div>
				{@render children()}
			</div>
		</div>
	</div>
{/if}
