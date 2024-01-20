<script>
	import TopNavigation from '$lib/components/TopNavigation.svelte';
	import '$lib/styles/global.css';
</script>

<header class="max-w-xl m-auto">
	<TopNavigation />
</header>

<main class="px-4 max-w-xl m-auto">
	<slot />
</main>
