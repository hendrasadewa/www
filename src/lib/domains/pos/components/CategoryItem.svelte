<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { cn } from '$lib/commons/utils/css-utils';

	let {
		activeSlug = '',
		name = 'Everything',
		slug = ''
	}: {
		activeSlug?: string | null;
		name?: string;
		slug?: string;
	} = $props();

	function onCategoryClick() {
		page.url.searchParams.set('category', slug);
		page.url.searchParams.set('page', '1');
		page.url.searchParams.delete('q');
		goto(page.url, { replaceState: true, noScroll: true });
	}
</script>

<button
	class={cn([
		'px-0 py-1',
		'cursor-pointer',
		activeSlug == slug && 'font-bold underline'
	])}
	onclick={onCategoryClick}
>
	{name}
</button>
