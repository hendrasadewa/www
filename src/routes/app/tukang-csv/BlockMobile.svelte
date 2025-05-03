<script>
	import { blur } from 'svelte/transition';
	import { onMount } from 'svelte';

	let w = 0;

	onMount(() => {
		const update = () => (w = window.innerWidth);
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});
</script>

{#if w <= 640}
	<div
		class="absolute z-50 flex h-screen w-full flex-col items-center justify-center bg-stone-400/20 backdrop-blur-sm sm:hidden"
		transition:blur={{ duration: 2000 }}
	>
		<span class="animate-pulse text-4xl">🚧</span>
		<h1 class="mb-2 text-2xl font-bold">Under construction</h1>
		<p class="w-80 text-center">
			Sorry folks, this app is not ready to use in mobile phone, I'm still
			working for it, please be patient.
		</p>
	</div>
{/if}
