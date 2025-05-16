<script lang="ts">
	import { AlertList } from '$lib/commons/components/Alert';
	import SiteHeader from '$lib/commons/components/SiteHeader';

	import '../app.css';

	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<AlertList />
	<SiteHeader />
	<main class="flex-1">
		{@render children()}
	</main>
</div>
