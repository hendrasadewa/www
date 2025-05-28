<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import { ImageOffIcon } from 'lucide-svelte';
	import { imageDimensions } from '../configs/image.configs';
	import type {
		Image,
		ImageDimension,
		ImageSize
	} from '../entity/common.entity';
	import { blur } from 'svelte/transition';

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
		onAlbumClick = () => {},
		isLoading = false
	}: Props = $props();

	const altText = $derived(`${name} by ${artist}`);
	const displayedTitle = $derived(
		name.length > 32 ? `${name.slice(0, 32)}...` : name
	);
	const displayedAlbumArt: Image | undefined = $derived(
		albumArts.find((albumArt) => albumArt.size === size)
	);
	const dimension: ImageDimension = $derived(imageDimensions[size]);

	function handleAlbumClick() {
		onAlbumClick();
	}
</script>

<div class="relative w-full">
	{#if isLoading}
		<div
			class={cn(
				'rounded',
				'shadow-lg',
				'bg-stone-300 dark:bg-stone-500',
				'animate-pulse',
				'mb-2',
				'h-[180px] w-[180px]'
			)}
		></div>
		<div class="max-w-[180px] py-2">
			<div
				class="mb-2 h-4 w-3/4 animate-pulse rounded bg-stone-300 dark:bg-stone-500"
			></div>
			<div
				class="h-3 w-1/2 animate-pulse rounded bg-stone-200 dark:bg-stone-400"
			></div>
		</div>
	{:else}
		<button onclick={handleAlbumClick} class="relative" transition:blur>
			<img
				class={cn(
					'rounded',
					'shadow-lg',
					'transition-transform duration-300',
					'hover:-translate-y-2 hover:scale-105 hover:shadow-xl',
					'bg-stone-400',
					'min-h-[180px]'
				)}
				height={dimension.height}
				width={dimension.width}
				src={displayedAlbumArt?.url}
				alt={altText}
			/>
		</button>
		<div class="max-w-[180px] py-2">
			<h3 class="max-h-[48px] truncate text-sm text-wrap text-ellipsis">
				{displayedTitle}
			</h3>
			<p class="text-sm text-stone-600 dark:text-stone-400">{artist}</p>
		</div>
	{/if}
</div>
