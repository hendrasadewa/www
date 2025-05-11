<script lang="ts">
	import { SEO } from '$lib/components/features/SEO';
	import {
		ArticleHeader,
		ArticleList
	} from '$lib/components/features/Blog/index.js';

	export let data;

	// For Meta Tags
	const metaTags = {
		title: 'Hendra Sadewa - Web Engineer | Senior Web Developer in Indonesia',
		description:
			'I am Hendra Sadewa, a Web Engineer based in Bekasi, Indonesia. Currently working at Stockbit as a Senior Web Engineer. Discover my projects, tech stacks, and interests.',
		categories: [
			'Hendra',
			'Hendra Sadewa',
			'web engineer',
			'web engineer Indonesia',
			'senior web developer'
		],
		headerImageAlt: 'Hendra Sadewa portrait',
		headerImageURL: '/img/me.webp',
		published: true,
		url: 'https://hendrasadewa.com',
		author: 'Hendra Sadewa'
	};

	let [highlighted, ...rest] = data.posts;
</script>

<SEO {...metaTags} />

<div class="mx-auto w-full max-w-screen-md">
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
