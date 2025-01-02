<script lang="ts">
	import { LucideTag } from 'lucide-svelte';

	export let categories: string[] = [];
</script>

<div class="flex flex-wrap items-center gap-2 py-2">
	{#each categories as category}
		<div
			class="rounded-full border bg-white/50 backdrop-blur-sm dark:bg-stone-800/50"
		>
			<div class="flex items-center gap-1 p-1 px-2">
				<LucideTag size="12" />
				<span class="text-xs capitalize md:text-sm">{category}</span>
			</div>
		</div>
	{/each}
</div>
