<script lang="ts">
	import siteInfo from '$lib/configs/siteInfo';
	let {
		children,
		description,
		headerImage,
		headerImageAlt = 'header',
		title
	} = $props();
</script>

<svelte:head>
	<title>{title} | {siteInfo.defaultTitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<article
	class="prose-headings:font-libre prose mb-16 px-4 py-4 dark:prose-invert prose-img:rounded prose-img:shadow-lg"
>
	<header>
		<div>
			<h1 class="mb-0">{title}</h1>
			<p class="text-neutral-600">{description}</p>
		</div>
		<div class="aspect-video">
			<img
				alt={headerImageAlt}
				src={headerImage}
				class="rounded shadow-md transition-all hover:shadow-lg"
			/>
		</div>
	</header>

	{@render children()}
</article>
