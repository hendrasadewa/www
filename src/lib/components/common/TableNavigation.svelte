<script lang="ts">
	import ChevronLeftCircle from 'lucide-svelte/icons/circle-chevron-left';
	import ChevronRightCircle from 'lucide-svelte/icons/circle-chevron-right';
	import IconButton from './IconButton.svelte';

	interface Props {
		onPrevClick(): void;
		onNextClick(): void;
		isTableEmpty: boolean;
	}

	let {
		onPrevClick = () => {},
		onNextClick = () => {},
		isTableEmpty = true
	}: Props = $props();
</script>

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
