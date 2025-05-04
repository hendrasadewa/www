<script lang="ts">
	import clsx from 'clsx';
	import FileJSONIcon from 'lucide-svelte/icons/file-json-2';
	import FileTextIcon from 'lucide-svelte/icons/file-text';
	import ChevronLeftCircle from 'lucide-svelte/icons/circle-chevron-left';
	import ChevronRightCircle from 'lucide-svelte/icons/circle-chevron-right';

	import FieldSelector from './FieldSelector.svelte';
	import IconButton from './IconButton.svelte';

	interface Props {
		fields: string[];
		selectedFields: string[];
		isTableEmpty: boolean;
		onPrevClick(): void;
		onNextClick(): void;
		onExportJSONClick(): void;
		onExportTextClick(): void;
	}

	let {
		fields = [],
		selectedFields = $bindable([]),
		isTableEmpty = true,
		onPrevClick = () => {},
		onNextClick = () => {},
		onExportJSONClick = () => {},
		onExportTextClick = () => {}
	}: Props = $props();
</script>

<header
	class={clsx([
		'flex items-center justify-between',
		'min-h-12 p-2',
		'border border-t-0 dark:border-0',
		isTableEmpty
			? 'bg-stone-100 dark:bg-stone-800'
			: 'bg-stone-50/70 dark:bg-stone-800/70'
	])}
>
	<div class="flex items-center gap-2">
		<div class="flex items-center">
			<IconButton
				icon={ChevronLeftCircle}
				onClick={onPrevClick}
				disabled={isTableEmpty}
			/>
			<IconButton
				icon={ChevronRightCircle}
				onClick={onNextClick}
				disabled={isTableEmpty}
				hoverEffect={true}
			/>
		</div>
		<FieldSelector {isTableEmpty} {fields} bind:selectedFields />
	</div>
	<div class="flex items-center gap-1">
		<IconButton
			icon={FileJSONIcon}
			onClick={onExportJSONClick}
			disabled={isTableEmpty}
			hoverEffect={true}
		/>
		<IconButton
			icon={FileTextIcon}
			onClick={onExportTextClick}
			disabled={isTableEmpty}
			hoverEffect={true}
		/>
	</div>
</header>
