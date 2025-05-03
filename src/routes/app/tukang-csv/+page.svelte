<script lang="ts">
	import Papa from 'papaparse';

	import type { RowData } from '$lib/types/csv';
	import FileDirectory from '$lib/components/csv/FileDirectory.svelte';
	import Table from '$lib/components/common/Table.svelte';
	import clsx from 'clsx';
	import Seo from '$lib/components/common/SEO.svelte';
	import { blur } from 'svelte/transition';
	import BlockMobile from './BlockMobile.svelte';

	// state - generic
	let isLoading = $state(false);
	let isOpen = $state(false);

	// state - files
	let parsedData: RowData[] = $state([]);
	let fileList: FileList | null = $state(null);
	let selectedFileIndex: number | null = $state(null);

	// state - pagination
	let page = $state(1);
	let perPage = $state(25);

	// derived states - pagination
	let totalPage = $derived(Math.floor(parsedData.length / perPage));
	let totalRecords = $derived(parsedData.length);
	let startIndex = $derived(page * perPage - perPage);
	let endIndex = $derived(page * perPage);

	// derived states - table metas
	let fields: string[] = $derived(
		parsedData.length > 0 ? Object.keys(parsedData[0]) : []
	);
	let records: RowData[] = $derived(
		parsedData.length > 0 ? parsedData.slice(startIndex, endIndex) : []
	);

	// event handlers
	function toggleOpen() {
		isOpen = !isOpen;
	}

	function clearTableInfo() {
		parsedData = [];
	}

	function parseCSV(file: File, chunkSize = 500) {
		isLoading = true;

		Papa.parse<RowData>(file, {
			header: true,
			worker: true,
			chunkSize,
			step(results) {
				if (isLoading && parsedData.length > chunkSize) {
					isLoading = false;
				}
				parsedData = [...parsedData, results.data];
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
			return;
		}

		clearTableInfo();

		if (index === selectedFileIndex) {
			selectedFileIndex = null;
			return;
		}

		selectedFileIndex = index;
		parseCSV(fileList[index]);
	}

	function onNextClick() {
		if (page < totalPage) {
			page += 1;
		}
	}

	function onPrevClick() {
		if (page > 1) {
			page -= 1;
		}
	}
</script>

<Seo
	categories={['Apps']}
	description="Collection of CSV Utilities"
	title="Tukang CSV"
/>

<div class="flex h-[calc(100vh-56px)] w-full items-start">
	<div class="h-full w-2/6 xl:w-1/5">
		<div class={clsx(['h-full'])}>
			<FileDirectory bind:fileList {onFileSelect} {selectedFileIndex} />
		</div>
	</div>
	<div class="relative h-full w-4/6 xl:w-4/5">
		<div class="h-full w-full overflow-scroll">
			<Table
				{fields}
				{records}
				{isLoading}
				{startIndex}
				{endIndex}
				{totalRecords}
				{onNextClick}
				{onPrevClick}
			/>
		</div>
	</div>
</div>
