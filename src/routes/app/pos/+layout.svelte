<script lang="ts">
	import ShoppingBagIcon from 'lucide-svelte/icons/shopping-bag';
	import UserIcon from 'lucide-svelte/icons/user';

	import { IconButton } from '$lib/commons/components/Button';
	import { userStoreAction } from '$lib/domains/pos/stores/user.svelte';

	import type { LayoutProps } from './$types';
	import Sidebar from '$lib/domains/pos/components/Sidebar.svelte';

	let { data, children }: LayoutProps = $props();

	if (data.credentials) {
		userStoreAction.loadCredentials(data.credentials);
	}
</script>

{#if data.userDetails}
	<header class="flex w-full items-center justify-between px-4 py-1">
		<p>Mart</p>
		<div class="flex items-center gap-2">
			<IconButton icon={UserIcon} />
			<IconButton icon={ShoppingBagIcon} />
		</div>
	</header>
{/if}

<div class="flex w-full gap-12 p-4">
	<div class="w-1/6">
		<aside class="sticky top-14 z-10">
			<Sidebar />
		</aside>
	</div>
	<main class="flex-1">
		{@render children()}
	</main>
</div>
