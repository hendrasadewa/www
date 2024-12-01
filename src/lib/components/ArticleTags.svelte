<script lang="ts">
	import { LucideTag } from 'lucide-svelte';

	export let categories: string[] = [];
</script>

<div class="flex items-center gap-2 py-2">
	{#each categories as category}
		<a
			class=" rounded-full bg-white/50 backdrop-blur-sm dark:bg-stone-800/50"
			href="/post/?category={category}"
		>
			<div class="flex items-center gap-1 p-1 px-2">
				<LucideTag size="12" />
				<span class="text-sm capitalize">{category}</span>
			</div>
		</a>
	{/each}
</div>
