<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';
	import { numberFormatter } from '$lib/commons/utils/formatter-utils';
	import type { Artist } from '../entity/artist.entity';
	import type { Image, ImageSize } from '../entity/common.entity';

	export let artist: Artist;
	export let size: ImageSize = 'medium';
	const defaultArtistImg: Image = {
		url: 'https://via.placeholder.com/150',
		size: 'medium'
	};

	const altText = artist ? `${artist.name} by ${artist.name}` : 'Artist';
	const artistImg =
		artist.image.find((img) => img.size === size) || defaultArtistImg;
</script>

<div class="">
	<h2 class="text-lg font-bold">{artist.name}</h2>
	<p class="text-sm">{numberFormatter.format(artist.listeners)} listeners</p>
	<p class="text-sm">{numberFormatter.format(artist.playcount)} plays</p>
</div>
