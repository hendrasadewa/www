<script lang="ts">
	import { onMount } from 'svelte';

	import SearchInput from '$lib/commons/components/SearchInput.svelte';
	import { getRandomChar } from '$lib/commons/utils/string.utils';
	import { cn } from '$lib/commons/utils/css-utils';

	import type { Album } from '../entity/album.entity';
	import { albumRepository } from '../repository/album.repository';
	import type { ImageSize } from '../entity/common.entity';

	import AlbumTile from './AlbumTile.svelte';

	interface Props {
		albums?: Album[];
		onAlbumClick(album: Album, index: number): void;
		size?: ImageSize;
		isMobile?: boolean;
	}

	let {
		albums: defaultAlbums,
		onAlbumClick = () => {},
		size = 'large',
		isMobile = true
	}: Props = $props();

	let albums: Album[] = $state(defaultAlbums || []);
	let isLoading = $state(false);

	let rowCount = $derived(isMobile ? 0 : 2);
	let colCount = $derived(isMobile ? 2 : 4);

	async function loadAlbums(query?: string) {
		if (!query) {
			query = getRandomChar();
		}
		isLoading = true;
		albums = await albumRepository.search(query, 8);
		isLoading = false;
	}

	onMount(() => {
		if (albums.length <= 0) {
			loadAlbums();
		}
	});
</script>

<div class="flex h-full w-full flex-col gap-8 p-4">
	<div>
		<SearchInput onSubmit={loadAlbums} placeholder="Find album" />
	</div>
	<div class={cn(['overflow-y-scroll', 'max-h-[400px]'])}>
		<AlbumTile
			onClick={onAlbumClick}
			{size}
			{rowCount}
			{colCount}
			{albums}
			{isLoading}
		/>
	</div>
</div>
