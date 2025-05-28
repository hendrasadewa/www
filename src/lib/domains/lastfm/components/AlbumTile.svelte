<script lang="ts">
	import { blur } from 'svelte/transition';
	import type { Album } from '../entity/album.entity';
	import type { ImageSize } from '../entity/common.entity';
	import AlbumDisplay from './AlbumDisplay.svelte';

	interface Props {
		colCount: number;
		rowCount: number;
		albums: Album[];
		onClick(album: Album, index: number): void;
		size?: ImageSize;
		isLoading?: boolean;
	}

	let {
		albums = [],
		colCount = 3,
		rowCount = 3,
		onClick = () => {},
		size = 'large',
		isLoading = false
	}: Props = $props();
</script>

<div class="flex items-center justify-center">
	<div
		class="grid items-start justify-center gap-2"
		style={`
				grid-template-columns: repeat(${colCount}, minmax(0, 1fr));
				grid-template-rows: repeat(${rowCount}, minmax(0, 1fr));
			`}
	>
		{#if isLoading}
			{#each Array(8) as _, i}
				<AlbumDisplay {isLoading} />
			{/each}
		{:else}
			{#each albums as album, index}
				<AlbumDisplay
					{size}
					albumArts={album.albumArts}
					artist={album.artist}
					name={album.name}
					onAlbumClick={() => onClick(album, index)}
					{isLoading}
				/>
			{/each}
		{/if}
	</div>
</div>
