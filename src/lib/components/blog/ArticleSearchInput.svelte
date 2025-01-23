<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { SearchIcon, XIcon } from 'lucide-svelte';

	let keyword = $state('');

	$effect(() => {
		const keywordParams = $page.url.searchParams.get('keyword');
		if (keywordParams) {
			keyword = keywordParams.toString();
		}
	});

	function handleKeywordChanged() {
		if (!keyword) {
			$page.url.searchParams.delete('keyword');
		} else {
			$page.url.searchParams.set('keyword', keyword);
		}

		goto(['/post?', $page.url.searchParams].join(''), { invalidateAll: true });
	}
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		handleKeywordChanged();
	}}
	class="rounded-full border bg-stone-100 px-2 py-1"
>
	<label id="search" class="flex items-center gap-2">
		<SearchIcon size="16" />
		<input
			type="text"
			id="search"
			name="keyword"
			class="w-full bg-transparent outline-none"
			placeholder="Cari artikel..."
			bind:value={keyword}
		/>
		{#if keyword}
			<button
				onclick={() => {
					keyword = '';
					handleKeywordChanged();
				}}
				type="reset"
			>
				<XIcon size="14" />
			</button>
		{/if}
	</label>
</form>
