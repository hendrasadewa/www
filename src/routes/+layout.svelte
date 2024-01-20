<script>
	import TopNavigation from '$lib/components/TopNavigation.svelte';
	import '$lib/styles/global.css';
	import { blur } from 'svelte/transition';

	export let data;

	$: pathname = data.pathname;
</script>

<header class="sticky top-0 bg-spring-wood-50 bg-opacity-95">
	<TopNavigation />
</header>

{#key pathname}
	<main class="px-4 max-w-xl m-auto" in:blur>
		<slot />
	</main>
{/key}
