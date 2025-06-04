<script>
	import { AlertList } from '$lib/commons/components/Alert';
	import SiteHeader from '$lib/commons/components/SiteHeader';

	import '../app.css';
	import { globalStore } from '$lib/commons/stores/global.svelte';

	// props
	const { children } = $props();

	let innerWidth = $state(0);

	$effect(() => {
		globalStore.setWidthChange(innerWidth);
	});
</script>

<svelte:window bind:innerWidth />

<div class="relative flex flex-col">
	<AlertList />
	<SiteHeader />
	<div class="flex-1">
		{@render children()}
	</div>
</div>
