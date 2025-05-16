<script lang="ts">
	import { cn } from '$lib/utils/css-utils';
	import FilePlusIcon from 'lucide-svelte/icons/file-plus';

	interface Props {
		fileList: FileList | null;
	}

	let { fileList = $bindable(null) }: Props = $props();
</script>

<label for="file-input">
	<div
		class={cn([
			'flex items-center justify-center',
			'h-8 w-8',
			'cursor-pointer',
			'rounded-lg',
			'hover:bg-stone-200 dark:hover:bg-stone-500/40',
			'transition-colors'
		])}
	>
		<FilePlusIcon
			class={cn(['text-blue-500 ', 'hover:cursor-pointer'])}
			size="18"
		/>
	</div>
	<input
		class="hidden"
		id="file-input"
		type="file"
		accept=".csv"
		bind:files={fileList}
		multiple
	/>
</label>
