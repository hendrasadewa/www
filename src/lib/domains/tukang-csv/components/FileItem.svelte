<script lang="ts">
	import cx from 'clsx';
	import { blur } from 'svelte/transition';
	import FileTextIcon from 'lucide-svelte/icons/file-text';
	import { formatDisplayFileSize } from '$lib/commons/utils/formatter-utils';
	import { cn } from '$lib/commons/utils/css-utils';

	export let file: File;
	export let index: number;
	export let selected = false;
	export let onClick: (index: number) => void;

	function handleFileClick() {
		onClick(index);
	}
</script>

<div
	transition:blur
	class={cx([
		'rounded-lg p-1 px-2',
		'transition-colors hover:bg-stone-300/30 dark:hover:bg-stone-700/30',
		selected ? 'bg-stone-300/30 dark:bg-stone-700/30' : ''
	])}
>
	<button
		class={cn([
			'flex w-full items-center gap-2 ',
			'disabled:text-blue-200 dark:disabled:text-blue-100/40',
			'flex w-full items-center gap-2 ',
			selected ? 'text-blue-500 dark:text-blue-400' : ''
		])}
		onclick={handleFileClick}
	>
		<FileTextIcon size="18" />
		<div class="flex w-full items-center justify-between">
			<span class={cn(['max-w-32 ', 'truncate'])}>
				{file.name}
			</span>
			<span class="truncate font-mono text-sm">
				{formatDisplayFileSize(file.size)}
			</span>
		</div>
	</button>
</div>
