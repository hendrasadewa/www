<script lang="ts">
	import { cn } from '$lib/utils/css-utils';
	import Notification from './Alert.svelte';

	const notifs = $state([]);

	function onDismiss(index: number) {
		notifs.splice(index, 1);
	}
</script>

<div class="fixed top-16 right-4 z-50">
	<div class={cn(['space-y-2'])}>
		{#each notifs as { title, message, notifiedAt }, index}
			<Notification {onDismiss} {index} {title} {message} {notifiedAt} />
		{/each}
	</div>
</div>
