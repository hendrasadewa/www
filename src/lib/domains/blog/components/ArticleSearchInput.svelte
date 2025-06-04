<script lang="ts">
	import XIcon from 'lucide-svelte/icons/x';
	import SearchIcon from 'lucide-svelte/icons/search';

	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	// state
	let keyword = $state('');

	// event handlers
	function handleResetClick() {
		page.url.searchParams.delete('keyword');
		goto(['/post', page.url.searchParams].join(''), { invalidateAll: true });
	}
</script>

<form action="/post" class="rounded-full bg-transparent">
	<label
		id="search"
		class="flex items-center gap-2 rounded-xl bg-stone-100 px-2 py-1 dark:bg-stone-700"
	>
		<SearchIcon size="16" />
		<input
			type="text"
			id="search"
			name="keyword"
			class="w-full outline-hidden"
			placeholder="Cari artikel..."
			bind:value={keyword}
		/>
		{#if keyword}
			<button onclick={handleResetClick} type="reset">
				<XIcon size="14" />
			</button>
		{/if}
	</label>
</form>
