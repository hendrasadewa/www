<script>
	import { cn } from '$lib/commons/utils/css-utils';
</script>

<form method="GET">
	<input
		placeholder="Search products"
		name="q"
		class={cn([
			'w-full',
			'py-2',
			'border-b border-stone-200 focus:border-stone-800',
			'focus:outline-none',
			'placeholder:font-display'
		])}
	/>
</form>
