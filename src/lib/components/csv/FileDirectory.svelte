<script lang="ts">
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

<div class="z-20 h-full px-4 shadow-lg dark:bg-stone-800">
	<header class="flex items-center justify-between py-2">
		<h2 class="text-xl font-bold">Files</h2>
		<FileUploader bind:fileList />
	</header>
	<div class="space-y-1">
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
			<div>
				<p class="text-gray-500">No file uploaded</p>
			</div>
		{/if}
	</div>
</div>
