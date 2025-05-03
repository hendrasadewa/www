<script lang="ts">
	import Papa from 'papaparse';

	import type { RowData } from '$lib/types/csv';
	import type { Pagination, TableInfo } from '$lib/types/table';
	import PageLoading from '$lib/components/common/PageLoading.svelte';
	import FileDirectory from '$lib/components/csv/FileDirectory.svelte';
	import Table from '$lib/components/common/Table.svelte';
	import { initialPagination, initialTableInfo } from '$lib/configs/table';

	// states
	let isLoading = $state(false);
	let data: RowData[] = $state([]);
	let fileList: FileList | null = $state(null);
	let selectedFileIndex: number | null = $state(null);
	let controller: Papa.Parser | null = null;

	let pagination: Pagination = $state(initialPagination);
	let tableInfo: TableInfo = $state(initialTableInfo);

	// event handlers
	function clearTableInfo() {
		data = [];

		tableInfo.records = [];
		tableInfo.fields = [];
		tableInfo.selected = null;
	}

	function fullParse(file: File, chunkSize = 500) {
		isLoading = true;

		Papa.parse<RowData>(file, {
			header: true,
			worker: true,
			chunkSize,

			step(results, parser) {
				if (!parser) {
					controller = parser;
				}

				if (data.length > pagination.perPage) {
					isLoading = false;
				}

				data = [...data, results.data];
			},

			complete: function () {
				isLoading = false;
			},
			error() {
				isLoading = false;
			}
		});
	}

	function onFileSelect(index: number) {
		if (!fileList) {
			alert('File is empty');
			return;
		}

		if (controller) {
			controller.abort();
		}

		clearTableInfo();

		if (index === selectedFileIndex) {
			selectedFileIndex = null;
			return;
		}

		selectedFileIndex = index;
		fullParse(fileList[index]);
	}

	function onNextClick() {
		if (pagination.page < pagination.totalPage) {
			pagination.page += 1;
		}
	}

	function onPrevClick() {
		if (pagination.page > 1) {
			pagination.page -= 1;
		}
	}

	$effect(() => {
		const { page, perPage } = pagination;

		tableInfo.fields = data.length > 0 ? Object.keys(data[0]) : [];

		pagination.totalRecords = data.length;
		pagination.startIndex = page * perPage - perPage;
		pagination.endIndex = page * perPage;
		pagination.totalPage = Math.floor(data.length / perPage);

		if (data.length > 0) {
			tableInfo.records = data.slice(
				pagination.startIndex,
				pagination.endIndex
			);
		} else {
			tableInfo.records = [];
		}
	});
</script>

<div class="flex h-[calc(100vh-56px)] w-full items-start">
	<div class="h-full w-1/5">
		<FileDirectory bind:fileList {onFileSelect} {selectedFileIndex} />
	</div>
	<div class="relative h-full w-4/5">
		<PageLoading {isLoading} />
		<div class="h-full w-full overflow-scroll">
			<Table
				title="title"
				bind:pagination
				bind:tableInfo
				bind:isLoading
				{onNextClick}
				{onPrevClick}
			/>
		</div>
	</div>
</div>
