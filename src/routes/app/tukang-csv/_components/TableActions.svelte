<script lang="ts">
	import FileJSONIcon from 'lucide-svelte/icons/file-json-2';
	import FileTextIcon from 'lucide-svelte/icons/file-text';

	import IconButton from '$lib/view/Common/Button/IconButton.svelte';

	export let onExportJSONClick = () => {};
	export let onExportTextClick = () => {};
	export let isTableEmpty = true;
</script>

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
