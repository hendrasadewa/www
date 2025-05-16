<script lang="ts">
	import { cn } from '$lib/commons/utils/css-utils';

	let { children, href = '#', class: classNames = '' } = $props();
</script>

<a {href} class={cn(['hover:text-blue-500', 'transition-color', classNames])}>
	{@render children()}
</a>
