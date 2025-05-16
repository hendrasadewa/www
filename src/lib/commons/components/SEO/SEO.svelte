<script lang="ts">
	import { onMount } from 'svelte';
	import metadata from '$lib/configs/site.config';

	let {
		title = metadata.title,
		description = metadata.description,
		categories = metadata.categories,
		headerImageAlt = metadata.headerImageAlt,
		headerImageURL = metadata.headerImageURL,
		url = metadata.url,
		date = ''
	} = $props();

	const updateThemeColor = () => {
		const metaThemeColor = document.querySelector('meta[name="theme-color"]');
		const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (metaThemeColor == null) {
			return;
		}
		metaThemeColor.setAttribute('content', darkMode ? '#292524' : '#f5f5f4');
	};

	onMount(() => {
		// Update the theme color on initial load
		updateThemeColor();

		// Listen for changes in the theme
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', updateThemeColor);

		return () => {
			// Cleanup listener on component destroy
			mediaQuery.removeEventListener('change', updateThemeColor);
		};
	});
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="robots" content="index, follow" />

	<!-- Page information -->
	<meta name="description" content={description} />
	<meta name="keywords" content={categories.join(', ')} />
	<meta name="author" content={metadata.author} />
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

	<!-- Theme -->
	<meta name="theme-color" content="#f5f5f4" />
	<meta name="theme-color" content="#042524" />

	<!-- Structured Data (JSON-LD for Rich Results) -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Hendra Sadewa",
			"jobTitle": "Senior Web Engineer",
			"worksFor": {
				"@type": "Organization",
				"name": "Stockbit"
			},
			"url": "https://hendrasadewa.com",
			"image": "/img/me.webp",
			"description": "Hendra Sadewa is a Senior Web Engineer based in Bekasi, Indonesia, working at Stockbit. He is skilled in Go, JavaScript, TypeScript, React, Svelte, and more.",
			"address": {
				"@type": "PostalAddress",
				"addressLocality": "Bekasi",
				"addressCountry": "Indonesia"
			},
			"knowsAbout": [
				"Web Development",
				"Go Programming",
				"JavaScript",
				"TypeScript",
				"React",
				"Svelte",
				"Tailwind CSS",
				"Database Management"
			]
		}
	</script>
</svelte:head>
