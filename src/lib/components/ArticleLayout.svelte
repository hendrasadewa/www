<script lang="ts">
	import siteInfo from '$lib/configs/siteInfo';
	let { children, description, title } = $props();
</script>

<svelte:head>
	<title>{title} | {siteInfo.defaultTitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<article>
	<header>
		<div>
			<h1 class="mb-0">{title}</h1>
			<p>{description}</p>
		</div>
	</header>

	<article class="prose py-8 dark:prose-invert">
		{@render children()}
	</article>
</article>
