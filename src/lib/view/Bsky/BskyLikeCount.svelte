<script lang="ts">
	import HeartIcon from 'lucide-svelte/icons/heart';
	import HeartCrackIcon from 'lucide-svelte/icons/heart-crack';
	import LoaderIcon from 'lucide-svelte/icons/loader';

	import bskInteractor from '$lib/interactor/bsky.interactor';

	export let postURI = '';
</script>

{#await bskInteractor.getPostByURI(postURI)}
	<LoaderIcon size="12" class="animate-spin" />
{:then post}
	<div class="flex items-center gap-1">
		<HeartIcon size="12" />
		<span class="md:text-md text-xs">
			{post.likeCount} likes from bsky
		</span>
	</div>
{:catch}
	<div class="flex items-center gap-1">
		<HeartCrackIcon size="12" />
	</div>
{/await}
