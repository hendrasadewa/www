<script lang="ts">
	import { SEO } from '$lib/commons/components/SEO';
	import metadata from '$lib/commons/configs/site.config.js';
	import { ArticleHeader, ArticleList } from '$lib/domains/blog/components';

	// props
	const { data } = $props();

	// derived
	let [highlighted, ...rest] = $derived(data.posts);
</script>

<SEO {...metadata} />
<main class="mx-auto w-full max-w-(--breakpoint-md) py-4">
	<section id="highlight">
		<ArticleHeader
			headerImageURL={highlighted.headerImageURL}
			headerImageAlt={highlighted.headerImageAlt}
			categories={highlighted.categories}
			date={highlighted.date}
			description={highlighted.description}
			title={highlighted.title}
			bskyPostURI={highlighted.bskyURI}
			url={`/post/${highlighted.slug}`}
		/>
	</section>
	<section id="posts" class="space-y-4">
		<ArticleList posts={rest} />
	</section>
</main>
