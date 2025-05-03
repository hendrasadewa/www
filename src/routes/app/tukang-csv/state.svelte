<script lang="ts">
	import { initialPagination, initialTableInfo } from '$lib/configs/table';
	import type { Pagination, TableInfo } from '$lib/types/table';

	let pagination: Pagination = $state(initialPagination);
	let tableInfo: TableInfo = $state(initialTableInfo);
</script>
