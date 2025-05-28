<script lang="ts">
	import StarIcon from 'lucide-svelte/icons/star';
	import type { Product } from '../entity/product.entity';

	let { product }: { product: Product } = $props();
</script>

<article class="flex w-full flex-col gap-1 rounded">
	<header>
		<p class="text-sm text-stone-500 underline dark:text-stone-300">
			{product.brand || 'FakeMart'}
		</p>
		<h1>{product.title}</h1>
	</header>
	<main class="w-full flex-1">
		<div class="flex items-center justify-center p-2">
			<img alt={product.title} src={product.thumbnail} />
		</div>
	</main>
	<footer class="w-full">
		<div class="flex items-center gap-2">
			<div class="flex items-center gap-1">
				<StarIcon size="12" />
				<span class="font-mono text-sm">{product.rating}</span>
			</div>
		</div>
		<div class="flex w-full items-center justify-between">
			<div class="flex items-center gap-1">
				<span class="font-mono text-sm">Stock: {product.stock}</span>
			</div>
			<p class="font-mono">${product.price}</p>
		</div>
	</footer>
</article>
