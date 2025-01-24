<script>
	import siteInfo from '$lib/configs/siteInfo';
</script>

<div class="flex items-center gap-4">
	<a href="/about">
		<img
			src="/img/me-2.webp"
			alt="author"
			class="h-24 w-24 -rotate-6 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
		/>
	</a>
	<div class="flex flex-col gap-1">
		<span class="text-lg">Written by {siteInfo.author}</span>
		<span class="text-gray-600 dark:text-gray-400">
			{siteInfo.defaultDescription}
		</span>
	</div>
</div>
