<script lang="ts">
	import { Heart, HeartCrack, LoaderIcon } from 'lucide-svelte';
	import { postHandlers } from '$lib/services/atproto/handlers/posts';

	export let postURI = '';
</script>

{#await postHandlers.getPostByURI(postURI)}
	<LoaderIcon size="12" class="animate-spin" />
{:then post}
	<div class="flex items-center gap-1">
		<Heart size="12" />
		<span class="md:text-md text-xs">
			{post.likeCount} likes from bsky
		</span>
	</div>
{:catch}
	<div class="flex items-center gap-1">
		<HeartCrack size="12" />
	</div>
{/await}
