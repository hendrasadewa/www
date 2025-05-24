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
			'border-b border-gray-200 focus:border-gray-800',
			'focus:outline-none',
			'placeholder:font-display'
		])}
	/>
</form>
