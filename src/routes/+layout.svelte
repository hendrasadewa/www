<script lang="ts">
	import SiteHeader from '$lib/components/common/SiteHeader.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-stone-100 dark:bg-stone-800 dark:text-white">
	<div class="relative flex h-full min-h-screen flex-col items-center">
		<SiteHeader />
		<main class="w-full max-w-screen-sm flex-1">
			{@render children()}
		</main>
	</div>
</div>
