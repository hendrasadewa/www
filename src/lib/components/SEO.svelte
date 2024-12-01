<script lang="ts">
	import siteInfo from '$lib/configs/siteInfo';

	export let title: string = siteInfo.defaultTitle;
	export let description: string = siteInfo.defaultDescription;
	export let date: string = '';
	export let categories: string[] = [];
	export let headerImageAlt: string = '';
	export let headerImageURL: string = '';
	export const published: boolean = false;
	export let url: string = '';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={categories.join(', ')} />
	<meta name="author" content={siteInfo.author} />
	<meta name="date" content={date} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={headerImageURL} />
	<meta property="og:image:alt" content={headerImageAlt} />
	<meta property="og:published_time" content={date} />
	<meta property="og:site_name" content="Your Blog Name" />
	<meta property="og:url" content={url} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={headerImageURL} />
	<meta name="twitter:image:alt" content={headerImageAlt} />
</svelte:head>
