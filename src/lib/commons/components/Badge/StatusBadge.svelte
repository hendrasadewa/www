<script lang="ts">
	import { StatusEnum } from '$lib/entity/common.entity';
	import { cn } from '$lib/commons/utils/css-utils';

	let {
		status = StatusEnum.UNSPECIFIED,
		name = ''
	}: {
		status: StatusEnum;
		name: string;
	} = $props();

	let dotBgColor = $derived(
		{
			[StatusEnum.UNSPECIFIED]: 'bg-stone-400',
			[StatusEnum.INFO]: 'bg-blue-400',
			[StatusEnum.SUCCESS]: 'bg-green-400',
			[StatusEnum.WARNING]: 'bg-yellow-400',
			[StatusEnum.ERROR]: 'bg-red-400'
		}[status]
	);
</script>

<div class="flex items-center gap-2">
	<div class={cn(['h-6 w-6 rounded-full ', dotBgColor])}></div>
	{name}
</div>
