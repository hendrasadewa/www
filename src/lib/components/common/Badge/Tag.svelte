<script>
	import TagIcon from 'lucide-svelte/icons/tag';

	import { cn } from '$lib/utils/cssUtils';

	export let name = '';
</script>

<div
	class={cn([
		'flex items-center justify-start gap-1',
		'px-4 py-1',
		'rounded-full border',
		' bg-white/50 backdrop-blur-sm dark:bg-stone-800/50',
		'transition-shadow hover:shadow-md '
	])}
>
	<TagIcon size="12" />
	<span class="text-xs capitalize md:text-sm">{name}</span>
</div>
