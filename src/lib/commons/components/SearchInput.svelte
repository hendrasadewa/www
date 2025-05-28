<script lang="ts">
	import SearchIcon from 'lucide-svelte/icons/search';
	import XIcon from 'lucide-svelte/icons/x';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		onSubmit: (query: string) => void;
	}

	let { onSubmit, ...rest }: Props = $props();
	let keyword = $state('');

	function handleSubmit(
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) {
		e.preventDefault();
		onSubmit(keyword.trim());
	}

	function handleReset() {
		keyword = '';
		onSubmit('');
	}
</script>

<form onsubmit={handleSubmit} class="rounded-full bg-transparent">
	<label
		id="search"
		class="flex items-center gap-2 rounded-xl bg-stone-100 px-2 py-1 dark:bg-stone-700"
	>
		<SearchIcon size="16" />
		<input
			type="text"
			class="w-full outline-hidden"
			{...rest}
			bind:value={keyword}
		/>
		{#if keyword}
			<button onclick={handleReset} type="reset">
				<XIcon size="14" />
			</button>
		{/if}
	</label>
</form>
