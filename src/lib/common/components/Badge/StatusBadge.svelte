<script lang="ts">
	import { StatusEnum } from '$lib/types/common';
	import { cn } from '$lib/utils/cssUtils';

	let {
		status = StatusEnum.UNSPECIFIED,
		name = ''
	}: {
		status: StatusEnum;
		name: string;
	} = $props();

	let dotBgColor = $derived(
		{
			[StatusEnum.UNSPECIFIED]: 'bg-gray-400',
			[StatusEnum.INFO]: 'bg-blue-400',
			[StatusEnum.SUCCESS]: 'bg-green-400',
			[StatusEnum.WARNING]: 'bg-yellow-400',
			[StatusEnum.ERROR]: 'bg-red-400'
		}[status]
	);
</script>

<div class="flex items-center gap-2">
	<div class={cn(['h-6 w-6 rounded-full border', dotBgColor])}></div>
	{name}
</div>
