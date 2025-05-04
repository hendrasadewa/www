<script lang="ts">
	import clsx from 'clsx';
	import Columns from 'lucide-svelte/icons/columns';
	import { cubicIn, cubicInOut } from 'svelte/easing';
	import { fade, scale } from 'svelte/transition';

	interface Props {
		fields: string[];
		selectedFields: string[];
		isTableEmpty: boolean;
	}

	interface Control {
		field: string;
		isActive: boolean;
	}

	let {
		fields = [],
		selectedFields = $bindable([]),
		isTableEmpty = true
	}: Props = $props();

	// states
	let isExpanded = $state(false);

	// computed values
	let options = $derived(
		fields.map<Control>((field) => ({
			isActive: selectedFields.some((act) => act === field),
			field
		}))
	);

	// event handlers
	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<div class="relative">
	<button
		onclick={toggleExpand}
		disabled={isTableEmpty}
		class={clsx([
			'flex items-center justify-center rounded-lg p-1',
			'transition-colors',
			'hover:bg-blue-50',
			isExpanded ? 'bg-blue-200' : 'bg-none'
		])}
	>
		<Columns
			size="18"
			class={clsx(
				isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
			)}
		/>
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
			{#each options as option}
				<label
					for="option-{option.field}"
					class={clsx([
						'cursor-pointer',
						'flex items-center gap-2',
						'px-2 py-1',
						'rounded-lg',
						'hover:bg-stone-200/50'
					])}
				>
					<input
						name="selectedFields"
						type="checkbox"
						bind:group={selectedFields}
						value={option.field}
						id="option-{option.field}"
					/>
					<span>{option.field}</span>
				</label>
			{/each}
		</div>
	{/if}
</div>
