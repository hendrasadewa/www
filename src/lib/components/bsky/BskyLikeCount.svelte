<script lang="ts">
	import { Heart, LoaderIcon } from 'lucide-svelte';
	import { GetPostLikes as getPostLikes } from '$lib/services/bsky/publicAPI';
	import { onMount } from 'svelte';
	import type { LikesResponse } from '$lib/services/bsky/types';

	export let postURI = '';

	let response: LikesResponse = { likes: [], uri: '' };
	let isLoading = false;

	onMount(async () => {
		isLoading = true;
		response = await getPostLikes(postURI);
		isLoading = false;
	});
</script>

{#if isLoading}
	<LoaderIcon class="animate-spin" />
{:else}
	<div class="flex items-center gap-1">
		<Heart size="12" />
		<span class="md:text-md text-xs"
			>{response.likes.length} likes from bsky</span
		>
	</div>
{/if}
