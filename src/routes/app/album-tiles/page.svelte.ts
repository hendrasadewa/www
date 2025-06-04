import type {
	Album,
	AlbumKeyPair
} from '$lib/domains/lastfm/entity/album.entity';
import { albumRepository } from '$lib/domains/lastfm/repository/album.repository';

interface PageState {
	albums: Album[];
	selectedIndex: number | null;
	isFinderOpen: boolean;
}

const pageState: PageState = $state({
	albums: [],
	selectedIndex: null,
	isFinderOpen: false
});

export const pageStore = {
	get albums() {
		return pageState.albums;
	},
	get selectedIndex() {
		return pageState.selectedIndex;
	},
	get isFinderOpen() {
		return pageState.isFinderOpen;
	},
	// derived
	get selectedAlbum() {
		if (!pageState.selectedIndex) {
			return null;
		}
		return pageState.albums[pageState.selectedIndex];
	},
	get code() {
		const pairs = pageState.albums.reduce<Array<AlbumKeyPair>>(
			(prev, curr) => [...prev, { artist: curr.artist, name: curr.name }],
			[]
		);
		return btoa(JSON.stringify(pairs));
	},

	// event handlers
	async onLoadCode(code: string) {
		try {
			const jsonString = atob(code);
			const json: AlbumKeyPair[] = JSON.parse(jsonString);

			const result = await Promise.all(
				json.map((kv) =>
					albumRepository.getInfo({ albumName: kv.name, artistName: kv.artist })
				)
			);

			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	},

	onLoadAlbum(albums: Album[] = []) {
		pageState.albums = albums;
	},
	onAlbumClick(album: Album) {
		if (pageState.selectedIndex == null) {
			return;
		}

		// replace the selected album
		pageState.albums[pageState.selectedIndex] = album;

		// reset ui
		pageState.isFinderOpen = false;
		pageState.selectedIndex = null;
	},
	onAlbumTileClick(_: Album, index: number) {
		pageState.selectedIndex = index;
		pageState.isFinderOpen = true;
	},
	onCloseFinder() {
		pageState.isFinderOpen = false;
	}
};

export function getPageState() {
	return pageState;
}

export function onLoadAlbum(albums: Album[] = []) {
	pageState.albums = albums;
}

export function onAlbumClick(album: Album) {
	if (pageState.selectedIndex == null) {
		return;
	}

	// replace the selected album
	pageState.albums[pageState.selectedIndex] = album;

	// reset ui
	pageState.isFinderOpen = false;
	pageState.selectedIndex = null;
}

export function onAlbumTileClick(_: Album, index: number) {
	pageState.selectedIndex = index;
	pageState.isFinderOpen = true;
}

export function onCloseFinder() {
	pageState.isFinderOpen = false;
}
