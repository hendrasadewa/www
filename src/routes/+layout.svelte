<script>
	import Seo from '$lib/components/SEO.svelte';
	import TopNavigation from '$lib/components/TopNavigation.svelte';
	import '$lib/styles/global.css';
</script>

<Seo />

<header class="max-w-xl m-auto">
	<TopNavigation />
</header>

<main class="px-4 max-w-xl m-auto">
	<slot />
</main>
