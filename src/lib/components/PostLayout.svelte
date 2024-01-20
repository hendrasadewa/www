<script lang="ts">
	import { basicInfo } from '$lib/basicInfo';
	import '$lib/styles/prism-duotone-space.css';

	export let title = '';
	export let date = '';
	export let description = '';
	export let tags = [''];
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="og:keywords" content={tags?.join(', ')} />
	<meta name="og:type" content="article" />
	<meta name="og:url" content="https://hendrasadewa.com" />
	<meta name="og:site_name" content={title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content={basicInfo.twitter} />
	<meta name="twitter:site" content={basicInfo.twitter} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<article>
	<header class="py-8">
		<h1 class="text-2xl">{title}</h1>
		<p class="text-sm">Published: {date}</p>
	</header>
	<main class="prose">
		<slot />
	</main>
</article>
