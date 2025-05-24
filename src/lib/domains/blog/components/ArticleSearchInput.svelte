<script lang="ts">
	import XIcon from 'lucide-svelte/icons/x';
	import SearchIcon from 'lucide-svelte/icons/search';

	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let keywordParams = $derived(page.url.searchParams.get('keyword'));
	let keyword = $state('');

	$effect(() => {
		if (keywordParams) {
			keyword = keywordParams.toString();
		}
	});

	function handleKeywordChanged() {
		if (!keyword) {
			page.url.searchParams.delete('keyword');
		} else {
			page.url.searchParams.set('keyword', keyword);
		}

		goto(['/post?', page.url.searchParams].join(''), { invalidateAll: true });
	}
	function handleSubmitSearch(
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		e.preventDefault();
		handleKeywordChanged();
	}

	function handleResetClick() {
		keyword = '';
		handleKeywordChanged();
	}
</script>

<form onsubmit={handleSubmitSearch} class="rounded-full bg-transparent">
	<label
		id="search"
		class="flex items-center gap-2 rounded-xl bg-stone-100 px-2 py-1"
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
