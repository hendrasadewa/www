<script lang="ts">
	import SiteHeader from '$lib/components/common/SiteHeader.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<main class="mx-auto max-w-screen-md flex-1 px-2 md:px-0">
		{@render children()}
	</main>
</div>
