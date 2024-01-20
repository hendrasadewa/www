<script lang="ts">
	import '$lib/styles/prism-duotone-space.css';
	import Seo from '$lib/components/SEO.svelte';

	export let data: {
		title: string;
		description: string;
		date: Date;
		content: any;
		tags: string[];
	};
</script>

<Seo
	description={data.description}
	keywords={data.tags?.join(', ')}
	title={data.title}
/>

<article>
	<header class="py-8">
		<h1 class="text-2xl">{data.title}</h1>
		<p class="text-sm">Published: {data.date}</p>
	</header>
	<main class="prose">
		<svelte:component this={data.content} />
	</main>
</article>
