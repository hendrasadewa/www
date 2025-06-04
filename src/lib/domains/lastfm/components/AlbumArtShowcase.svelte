<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	import { cn } from '$lib/commons/utils/css-utils';
	import type { ImageDimension, ImageSize } from '../entity/common.entity';
	import { imageDimensions } from '../configs/image.configs';

	interface Props extends HTMLImgAttributes {
		size?: ImageSize;
	}
	const { size = 'large', ...rest }: Props = $props();

	let dimension: ImageDimension = $derived(imageDimensions[size]);
</script>

<div class="relative">
	<img
		class={cn(
			'rounded',
			'shadow-lg',
			'transition-transform duration-500',
			'hover:-translate-y-18 hover:scale-105 hover:shadow-xl',
			'bg-stone-400',
			'cursor-pointer'
		)}
		height={dimension.height}
		width={dimension.width}
		{...rest}
	/>
</div>
