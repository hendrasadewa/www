<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import ColumnsIcon from 'lucide-svelte/icons/columns';

	import { Dropdown } from '$lib/commons/components/Dropdown';

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

<Dropdown disabled={isTableEmpty} align="left">
	{#snippet toggle()}
		<ColumnsIcon size="18" />
	{/snippet}

	{#each options as option}
		<label
			for="option-{option.field}"
			class={cn([
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
