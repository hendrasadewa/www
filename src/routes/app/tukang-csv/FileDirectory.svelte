<script lang="ts">
	import clsx from 'clsx';
	import FileUploader from './FileUploader.svelte';
	import FileItem from './FileItem.svelte';

	interface Props {
		fileList: FileList | null;
		onFileSelect(index: number): void;
		selectedFileIndex: number | null;
	}

	let {
		fileList = $bindable(null),
		selectedFileIndex = null,
		onFileSelect
	}: Props = $props();
</script>

<div
	class={clsx([
		'flex h-full flex-col',
		'h-full',
		'z-20 shadow-lg',
		'bg-stone-50 dark:bg-stone-800'
	])}
>
	<header class="flex items-center justify-between px-4 py-2">
		<h2 class="py-2 text-xl font-bold">Files</h2>
		<FileUploader bind:fileList />
	</header>
	<div class="h-full flex-1 space-y-1 overflow-y-scroll px-2">
		{#if fileList}
			{#each fileList as file, index}
				<FileItem
					onClick={() => onFileSelect(index)}
					selected={index === selectedFileIndex}
					{file}
					{index}
				/>
			{/each}
		{:else}
			<div class="px-2">
				<p class="text-gray-500">No file uploaded</p>
			</div>
		{/if}
	</div>
</div>
