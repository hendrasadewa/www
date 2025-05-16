<script lang="ts">
	import { SEO } from '$lib/commons/components/SEO';

	import metadata from '$lib/configs/site.config';
	import { ArticleHeader, ArticleList } from '$lib/domains/blog/components';

	export let data;

	let [highlighted, ...rest] = data.posts;
</script>

<SEO {...metadata} />

<div class="mx-auto w-full max-w-(--breakpoint-md)">
	<div class="space-y-8 pb-8">
		<section id="highlight" class="mt-4 space-y-4">
			<ArticleHeader
				headerImageURL={highlighted.headerImageURL}
				headerImageAlt={highlighted.headerImageAlt}
				categories={highlighted.categories}
				date={highlighted.date}
				description={highlighted.description}
				title={highlighted.title}
				url={`/post/${highlighted.slug}`}
				bskyPostURI={highlighted.bskyURI}
			/>
		</section>
		<section id="posts" class="space-y-4">
			<ArticleList posts={rest} />
		</section>
	</div>
</div>
