<script lang="ts">
	import { globalStore } from '$lib/commons/stores/global.svelte';
	import { cn } from '$lib/commons/utils/css-utils';
	import Notification from './Alert.svelte';
</script>

<div class="fixed top-16 right-8 z-50">
	<div class={cn(['space-y-2'])}>
		{#each globalStore.notifications as { title, message, notifiedAt }, index}
			<Notification
				onDismiss={globalStore.dismissNotification}
				{index}
				{title}
				{message}
				{notifiedAt}
			/>
		{/each}
	</div>
</div>
