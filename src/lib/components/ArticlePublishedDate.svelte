<script lang="ts">
	import { LucideCalendar } from 'lucide-svelte';

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
	<LucideCalendar size="12" />
	<time>{formattedDate}</time>
</div>
