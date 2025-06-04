<script lang="ts">
	import IconButton from '$lib/commons/components/Button/IconButton.svelte';
	import { globalStore } from '$lib/commons/stores/global.svelte.js';
	import AlbumFinder from '$lib/domains/lastfm/components/AlbumFinder.svelte';
	import AlbumTile from '$lib/domains/lastfm/components/AlbumTile.svelte';
	import Modal from '$lib/domains/lastfm/components/Modal.svelte';
	import ShareIcon from 'lucide-svelte/icons/share';

	import { pageStore } from './page.svelte.js';
	import { page } from '$app/state';

	const { data } = $props();

	pageStore.onLoadAlbum(data.albums);
</script>

<div
	class="flex min-h-[calc(100vh-36px)] flex-col items-center justify-center p-4"
>
	<header class="p-4">
		<div>
			<h1 class="font-display text-center text-4xl">Top 10 Album</h1>
			<p>pick your top 10 albums</p>
		</div>
		<div>
			<IconButton
				icon={ShareIcon}
				onClick={() => {
					page.url.searchParams.set('code', pageStore.code);
					navigator.clipboard.writeText(page.url.toString());
					alert('url was copied to your clipboard');
				}}
			/>
		</div>
	</header>
	<AlbumTile
		albums={pageStore.albums}
		onClick={pageStore.onAlbumTileClick}
		colCount={globalStore.isMobile ? 2 : 5}
		rowCount={globalStore.isMobile ? 5 : 2}
	/>
</div>

<Modal
	onCloseClick={pageStore.onCloseFinder}
	isVisible={pageStore.isFinderOpen}
>
	{#snippet title()}
		<div>
			<span>Replace:</span>
			<span class="font-bold">{pageStore.selectedAlbum?.name}</span>
		</div>
	{/snippet}
	<AlbumFinder
		onAlbumClick={pageStore.onAlbumClick}
		isMobile={globalStore.isMobile}
	/>
</Modal>
