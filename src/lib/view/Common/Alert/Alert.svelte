<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import XIcon from 'lucide-svelte/icons/x';

	import { cn } from '$lib/utils/css-utils';

	interface Props {
		title?: string;
		message?: string;
		type?: 'success' | 'info' | 'danger';
		notifiedAt?: Date;

		index?: number;

		left?: Snippet;
		right?: Snippet;

		onDismiss?: (index: number) => void;
	}

	let {
		title = 'Example Notification',
		message = 'This is an notification paragaph as an example.',
		index = 0,
		notifiedAt = new Date(),

		left,
		right,

		onDismiss = () => {}
	}: Props = $props();

	const time = `${notifiedAt.getHours()}:${notifiedAt.getMinutes()}`;
</script>

<article
	in:fade
	class={cn([
		'relative',
		'flex items-center justify-between gap-1',
		'w-[340px]',
		'px-4 py-2',
		'rounded-xl border',
		'shadow-xl backdrop-blur-xs',
		'bg-stone-100/75 dark:bg-stone-800/70'
	])}
>
	<button
		onclick={() => onDismiss(index)}
		class={cn([
			'absolute -top-2 -right-2',
			'rounded-xl border',
			'shadow-xl backdrop-blur-xs',
			'bg-stone-100/75 dark:bg-stone-800/70'
		])}
	>
		<XIcon size="14" class="text-stone-400" />
	</button>

	{#if left}
		<aside class="w-[48px]">
			{@render left()}
		</aside>
	{/if}
	<div class="flex-1 overflow-hidden">
		<header class="flex items-end justify-between gap-2">
			<h1 class="truncate text-sm font-bold">{title}</h1>
			<time class="text-xs text-stone-500">{time}</time>
		</header>
		<main>
			<p class="text-sm">{message}</p>
		</main>
	</div>
	{#if right}
		<aside>
			{@render right()}
		</aside>
	{/if}
</article>
