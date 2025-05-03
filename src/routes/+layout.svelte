<script lang="ts">
	import SiteHeader from '$lib/components/common/SiteHeader.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<SiteHeader />
	<main>
		{@render children()}
	</main>
</div>
