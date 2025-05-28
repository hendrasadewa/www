<script lang="ts">
	import { Button } from '$lib/commons/components/Button';
	import { cn } from '$lib/commons/utils/css-utils.js';

	import AlbumFinder from '$lib/domains/lastfm/components/AlbumFinder.svelte';
	import AlbumTile from '$lib/domains/lastfm/components/AlbumTile.svelte';
	import type { Album } from '$lib/domains/lastfm/entity/album.entity';

	import { XIcon } from 'lucide-svelte';
	import { blur, scale } from 'svelte/transition';

	const { data } = $props();

	let innerWidth = $state(0);
	let isFinderOpen = $state(false);
	let rowCount = $state(3);
	let colCount = $state(3);
	let isMobile = $derived(innerWidth <= 480);

	let tiles = $state(data.albums);
	let selectedIndex: number | null = $state(null);

	function handleAlbumClick(album: Album) {
		if (selectedIndex == null) {
			return;
		}

		tiles[selectedIndex] = album;
		isFinderOpen = false;
		selectedIndex = null;
	}

	function handleTileClick(_: Album, index: number) {
		selectedIndex = index;
		isFinderOpen = true;
	}

	function closeFinder() {
		isFinderOpen = false;
	}
</script>

<svelte:window bind:innerWidth />

<div class={cn(['relative'])}>
	<header>
		<h1 class="font-display text-center text-2xl">Album Tilemaker</h1>
	</header>
	<!-- Tiles -->
	<div class="p-4">
		<AlbumTile albums={tiles} onClick={handleTileClick} {rowCount} {colCount} />
	</div>
	<!-- Search Modal -->
	{#if isFinderOpen}
		<div
			class={cn([
				'absolute top-0 z-40 h-full min-h-screen w-full p-4',
				'bg-stone-800/65',
				'flex items-start justify-center'
			])}
			transition:scale
		>
			<div
				class="flex w-full flex-col rounded-xl bg-stone-700/90 shadow-xl md:w-3/4"
			>
				<div class="flex items-center justify-between px-6 py-2">
					<h2>Find Album</h2>
					<Button onclick={closeFinder}><XIcon /></Button>
				</div>
				<AlbumFinder onAlbumClick={handleAlbumClick} {isMobile} />
			</div>
		</div>
	{/if}
</div>
