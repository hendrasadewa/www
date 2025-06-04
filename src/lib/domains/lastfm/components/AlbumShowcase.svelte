<script lang="ts">
	import { blur } from 'svelte/transition';

	import type { Image, ImageSize } from '../entity/common.entity';
	import AlbumArtShowcase from './AlbumArtShowcase.svelte';
	import { cn } from '$lib/commons/utils/css-utils';

	interface Props {
		name?: string;
		artist?: string;
		albumArts?: Image[];
		size?: ImageSize;
		onAlbumClick?: () => void;
		isLoading?: boolean;
	}

	const {
		name = 'unknown album',
		artist = 'unknown artist',
		albumArts = [],
		size = 'medium',
		onAlbumClick = () => {}
	}: Props = $props();

	let isHovered = $state(false);

	const displayedTitle = $derived(
		name.length > 32 ? `${name.slice(0, 32)}...` : name
	);
	const displayedAlbumArt: Image | undefined = $derived(
		albumArts.find((albumArt) => albumArt.size === size)
	);

	function toggleHover() {
		setTimeout(() => {
			isHovered = !isHovered;
		}, 700);
	}
</script>

<div
	class="relative w-full"
	role="group"
	onmouseover={toggleHover}
	onfocus={toggleHover}
	onmouseout={toggleHover}
	onblur={toggleHover}
>
	<button onclick={onAlbumClick} class="relative w-full" transition:blur>
		<AlbumArtShowcase
			src={displayedAlbumArt?.url}
			alt="{name} by ${artist}"
			{size}
		/>
	</button>
	{#if isHovered}
		<div
			class={cn(['absolute bottom-0 left-0 p-2', 'w-full max-w-[174px]'])}
			transition:blur
		>
			<h3 class="max-h-[48px] truncate text-sm text-wrap text-ellipsis">
				{displayedTitle}
			</h3>
			<p class="text-sm text-stone-600 dark:text-stone-400">{artist}</p>
		</div>
	{/if}
</div>
