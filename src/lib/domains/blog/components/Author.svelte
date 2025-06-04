<script>
	import metadata from '$lib/commons/configs/site.config';
</script>

<div class="flex w-full items-center gap-4">
	<a href="/" class="flex w-1/4 items-center justify-center">
		<img
			src="/img/me-2.webp"
			alt="author"
			class="h-24 w-24 -rotate-6 shadow-xs transition-all hover:-translate-y-2 hover:shadow-xl"
		/>
	</a>
	<div class="flex w-full flex-col gap-1">
		<span class="text-lg">Written by {metadata.author}</span>
		<span class="text-stone-600 dark:text-stone-400">
			Web Engineer, I am a Human 👋.
		</span>
	</div>
</div>
