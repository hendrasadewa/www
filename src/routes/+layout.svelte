<script lang="ts">
	import { AlertList } from '$lib/view/Common/Alert';
	import SiteHeader from '$lib/view/SiteHeader';

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
