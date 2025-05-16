<script lang="ts">
	import ChevronLeftCircleIcon from 'lucide-svelte/icons/circle-chevron-left';
	import ChevronRightCircleIcon from 'lucide-svelte/icons/circle-chevron-right';

	import { cn } from '$lib/utils/cssUtils';
	import { IconButton } from '$lib/view/Common/Button';

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
		icon={ChevronLeftCircleIcon}
		onClick={onPrevClick}
		disabled={isTableEmpty}
	/>
	<input
		type="number"
		class={cn([
			'w-16',
			'rounded-lg border',
			'px-2 py-1',
			'bg-transparent',
			'border border-blue-500'
		])}
		disabled={isTableEmpty}
		bind:value={page}
	/>
	<IconButton
		icon={ChevronRightCircleIcon}
		onClick={onNextClick}
		disabled={isTableEmpty}
		hoverEffect={true}
	/>
</div>
