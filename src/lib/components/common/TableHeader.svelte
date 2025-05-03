<script lang="ts">
	import clsx from 'clsx';
	import FileJSONIcon from 'lucide-svelte/icons/file-json-2';
	import FileTextIcon from 'lucide-svelte/icons/file-text';
	import ChevronLeftCircle from 'lucide-svelte/icons/circle-chevron-left';
	import ChevronRightCircle from 'lucide-svelte/icons/circle-chevron-right';

	interface Props {
		isTableEmpty: boolean;
		onPrevClick(): void;
		onNextClick(): void;
		onExportJSONClick(): void;
		onExportTextClick(): void;
	}

	let {
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
	<div class="flex items-center">
		<button
			onclick={onPrevClick}
			disabled={isTableEmpty}
			class="flex items-center justify-center rounded-lg p-1"
		>
			<ChevronLeftCircle
				size="18"
				class={clsx(
					isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
				)}
			/>
		</button>
		<button
			onclick={onNextClick}
			disabled={isTableEmpty}
			class="flex items-center justify-center rounded-lg p-1 hover:bg-stone-200 dark:hover:bg-stone-500/70"
		>
			<ChevronRightCircle
				size="18"
				class={clsx(
					isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
				)}
			/>
		</button>
	</div>
	<div class="flex items-center gap-1">
		<button
			onclick={onExportJSONClick}
			disabled={isTableEmpty}
			class="flex items-center justify-center rounded-lg p-1"
		>
			<FileJSONIcon
				size="18"
				class={clsx(
					isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
				)}
			/>
		</button>
		<button
			onclick={onExportTextClick}
			disabled={isTableEmpty}
			class="flex items-center justify-center rounded-lg p-1"
		>
			<FileTextIcon
				size="18"
				class={clsx(
					isTableEmpty ? 'cursor-not-allowed text-blue-200' : 'text-blue-500'
				)}
			/>
		</button>
	</div>
</header>
