<script lang="ts">
	import LucideTagIcon from 'lucide-svelte/icons/tag';

	export let categories: string[] = [];
</script>

<div class="flex flex-wrap items-center gap-2 py-2">
	{#each categories as category}
		<div
			class="rounded-full border bg-white/50 backdrop-blur-sm transition-shadow hover:shadow-md dark:bg-stone-800/50"
		>
			<a
				class="flex items-center gap-1 p-1 px-2"
				href="/post?keyword={category}"
			>
				<LucideTagIcon size="12" />
				<span class="text-xs capitalize md:text-sm">{category}</span>
			</a>
		</div>
	{/each}
</div>
