<script lang="ts">
	import { AppBskyFeedDefs, AppBskyFeedPost } from '@atproto/api';
	import { Heart, LoaderIcon } from 'lucide-svelte';
	import { onMount } from 'svelte';

	import { agent } from '$lib/services/atproto/services';

	export let postURI = '';

	let isLoading = false;
	let post: AppBskyFeedDefs.PostView | null = null;

	onMount(async () => {
		isLoading = true;

		const thread = await agent.app.bsky.feed.getPostThread({
			uri: postURI
		});

		if (!AppBskyFeedDefs.isThreadViewPost(thread.data.thread)) {
			throw new Error('Expected a thread view post');
		}

		post = thread.data.thread.post;
		if (!AppBskyFeedPost.isRecord(post.record)) {
			throw new Error('Expected a post with a record');
		}

		isLoading = false;
	});
</script>

{#if isLoading}
	<LoaderIcon size="12" class="animate-spin" />
{:else if post}
	<div class="flex items-center gap-1">
		<Heart size="12" />
		<span class="md:text-md text-xs">
			{post.likeCount} likes from bsky
		</span>
	</div>
{/if}
