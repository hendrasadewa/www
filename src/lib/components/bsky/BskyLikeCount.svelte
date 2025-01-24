<script lang="ts">
	import { Heart, LoaderIcon } from 'lucide-svelte';
	import { GetPostLikes as getPostLikes } from '$lib/services/bsky/publicAPI';

	export let postURI = '';
</script>

{#await getPostLikes(postURI)}
	<LoaderIcon class="animate-spin" />
{:then response}
	<div class="flex items-center gap-1">
		<Heart size="12" />
		<span class="md:text-md text-xs"
			>{response.likes.length} likes from bsky</span
		>
	</div>
{:catch}
	<span class="md:text-md text-xs">failed to get likes</span>
{/await}
