<script lang="ts">
	import clsx from 'clsx';
	import Columns from 'lucide-svelte/icons/columns';
	import Dropdown from '$lib/components/common/Dropdown.svelte';

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

	// computed values
	let options = $derived(
		fields.map<Control>((field) => ({
			isActive: selectedFields.some((act) => act === field),
			field
		}))
	);
</script>

<Dropdown disabled={isTableEmpty}>
	{#snippet toggle()}
		<Columns
			size="18"
			class={clsx(
				isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
			)}
		/>
	{/snippet}

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
</Dropdown>
