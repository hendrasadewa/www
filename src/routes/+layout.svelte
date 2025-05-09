<script lang="ts">
	import Notification from '$lib/components/common/Notification.svelte';
	import NotificationList from '$lib/components/common/NotificationList.svelte';
	import SiteHeader from '$lib/components/common/SiteHeader.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative flex flex-col">
	<NotificationList />
	<SiteHeader />
	<main>
		{@render children()}
	</main>
</div>
