<script lang="ts">
	import { cn } from '$lib/utils/cssUtils';
	import Notification from './Notification.svelte';

	const notifs = $state([]);

	function onDismiss(index: number) {
		notifs.splice(index, 1);
	}
</script>

<div class="fixed right-4 top-16 z-50">
	<div class={cn(['space-y-2'])}>
		{#each notifs as { title, message, notifiedAt }, index}
			<Notification {onDismiss} {index} {title} {message} {notifiedAt} />
		{/each}
	</div>
</div>
