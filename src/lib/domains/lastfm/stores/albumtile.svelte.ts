import type { Album } from '../entity/album.entity';

interface State {
	albums: Album[];
	width: number;
	height: number;
}

const albumTileState = $state<State>({
	albums: [],
	width: 3,
	height: 3
});

export const albumTileStore = {
	replace(album: Album) {
		albumTileState.albums.map((item) => {
			if (item.name === album.name) {
				return album;
			}
			return item;
		});
	},
	getAlbums() {
		const maxAlbums = albumTileState.width * albumTileState.height;
		if (albumTileState.albums.length > maxAlbums) {
			albumTileState.albums = albumTileState.albums.slice(0, maxAlbums);
		}

		return [...albumTileState.albums];
	},
	add(album: Album) {
		if (albumTileState.albums.some((a) => a.name === album.name)) {
			return;
		}
		albumTileState.albums = [...albumTileState.albums, album];
	},
	remove(album: Album) {
		albumTileState.albums = albumTileState.albums.filter(
			(a) => a.name !== album.name
		);
	},
	changeSize(width: number, height: number) {
		albumTileState.width = width;
		albumTileState.height = height;
	},
	loadAlbums(albums: Album[]) {
		albumTileState.albums = albums;
	}
};
