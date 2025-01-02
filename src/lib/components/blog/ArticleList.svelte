<script lang="ts">
	import type { Post } from '$lib/types/post';

	import ArticleItem from './ArticleItem.svelte';
	import ArticleHeader from './ArticleHeader.svelte';

	export let posts: Post[] = [];

	let [highlighted, ...rest] = posts;
</script>

<div class="space-y-4 pb-12">
	<section id="highlight">
		<a href={`/post/${highlighted.slug}`} class="cursor-default">
			<ArticleHeader
				headerImageURL={highlighted.headerImageURL}
				headerImageAlt={highlighted.headerImageAlt}
				categories={highlighted.categories}
				date={highlighted.date}
				description={highlighted.description}
				title={highlighted.title}
			/>
		</a>
	</section>

	<section id="posts">
		<ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
			{#each rest as post}
				<li>
					<ArticleItem {post} />
				</li>
			{/each}
		</ul>
	</section>
</div>
