<script lang="ts">
	import { LucideTag } from 'lucide-svelte';

	export let categories: string[] = [];
</script>

<div class="flex items-center gap-2 py-2">
	{#each categories as category}
		<a
			class="flex items-center gap-1 rounded-full border bg-white bg-opacity-45 px-2 py-1"
			href="/post/?category={category}"
		>
			<LucideTag size="12" />
			<span class="text-sm capitalize">{category}</span>
		</a>
	{/each}
</div>
