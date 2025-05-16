<script lang="ts">
	import { Tag } from '$lib/commons/components/Badge';

	export let categories: string[] = [];
</script>

<div class="flex flex-wrap gap-1">
	{#each categories as category}
		<a href="/post?keyword={category}">
			<Tag name={category} />
		</a>
	{/each}
</div>
