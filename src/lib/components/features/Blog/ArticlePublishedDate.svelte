<script lang="ts">
	import LucideCalendarIcon from 'lucide-svelte/icons/calendar';

	export let publishedDate: string = '';

	let dateFormat = Intl.DateTimeFormat('id-ID', {
		day: 'numeric',
		month: 'short',
		year: 'numeric'
	});

	let date = new Date(publishedDate);
	let formattedDate = dateFormat.format(date);
</script>

<div class="flex items-center gap-1">
	<LucideCalendarIcon size="12" />
	<time class="md:text-md text-xs">{formattedDate}</time>
</div>
