<script lang="ts">
	import IconButton from '$lib/commons/components/Button/IconButton.svelte';
	import { globalStore } from '$lib/commons/stores/global.svelte.js';
	import AlbumFinder from '$lib/domains/lastfm/components/AlbumFinder.svelte';
	import AlbumTile from '$lib/domains/lastfm/components/AlbumTile.svelte';
	import Modal from '$lib/domains/lastfm/components/Modal.svelte';
	import ShareIcon from 'lucide-svelte/icons/share';

	import { pageStore } from './page.svelte.js';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	const { data } = $props();

	pageStore.onLoadAlbum(data.albums);

	function onShareClick() {
		page.url.searchParams.set('code', pageStore.code);
		navigator.clipboard.writeText(page.url.toString());
		globalStore.notifyUser(
			'Link Copied',
			'The current url has been copied to your clipboard, now you can share the link into your social media accounts'
		);

		setTimeout(() => {
			const target = globalStore.notifications.length - 1;
			if (globalStore.notifications.length >= target) {
				globalStore.dismissNotification(target);
			}
		}, 2500);
	}

	onMount(async () => {
		const code = page.url.searchParams.get('code');
		if (!code) {
			pageStore.onLoadAlbum(data.albums);
			return;
		}

		const result = await pageStore.onLoadCode(code);
		if (result) {
			pageStore.onLoadAlbum(result);
		}
	});
</script>

<div
	class="flex min-h-[calc(100vh-36px)] flex-col items-center justify-center p-4"
>
	<header class="p-4">
		<div>
			<h1 class="font-display text-center text-4xl">Top 10 Album</h1>
			<p>pick your top 10 albums</p>
		</div>
		<div class="mt-4 flex items-center justify-center">
			<IconButton icon={ShareIcon} onClick={onShareClick} iconClass="mr-2">
				Share
			</IconButton>
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
