<script lang="ts">
	import cx from 'clsx';
	import { blur } from 'svelte/transition';
	import FileTextIcon from 'lucide-svelte/icons/file-text';
	import { formatDisplayFileSize } from '$lib/utils/formatters';

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
		'transition-colors hover:bg-stone-300/30',
		selected ? 'bg-stone-300/30' : ''
	])}
>
	<button class="flex w-full items-center gap-2" onclick={handleFileClick}>
		<FileTextIcon size="18" class="text-blue-500" />
		<div class="flex w-full items-center justify-between">
			<span class="max-w-32 truncate text-sm">{file.name}</span>
			<span class="truncate font-mono text-sm">
				{formatDisplayFileSize(file.size)}
			</span>
		</div>
	</button>
</div>
