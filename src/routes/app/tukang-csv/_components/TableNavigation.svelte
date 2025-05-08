<script lang="ts">
	import clsx from 'clsx';
	import ChevronLeftCircle from 'lucide-svelte/icons/circle-chevron-left';
	import ChevronRightCircle from 'lucide-svelte/icons/circle-chevron-right';

	import IconButton from '$lib/components/common/IconButton.svelte';

	interface Props {
		onPrevClick(): void;
		onNextClick(): void;
		isTableEmpty: boolean;
		page: number;
	}

	let {
		onPrevClick = () => {},
		onNextClick = () => {},
		isTableEmpty = true,
		page = $bindable(0)
	}: Props = $props();
</script>

<div class="flex items-center gap-1">
	<IconButton
		icon={ChevronLeftCircle}
		onClick={onPrevClick}
		disabled={isTableEmpty}
	/>
	<input
		type="number"
		class={clsx(['w-16', 'rounded-lg border', 'px-2 py-1'])}
		disabled={isTableEmpty}
		bind:value={page}
	/>
	<IconButton
		icon={ChevronRightCircle}
		onClick={onNextClick}
		disabled={isTableEmpty}
		hoverEffect={true}
	/>
</div>
