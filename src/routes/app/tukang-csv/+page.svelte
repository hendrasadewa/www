<script lang="ts">
	import Papa from 'papaparse';
	import clsx from 'clsx';

	import type { RowData } from '$lib/types/csv';
	import { downloadFile } from '$lib/utils/fileUtils';

	import FileDirectory from './FileDirectory.svelte';
	import Seo from '$lib/components/common/SEO.svelte';
	import FieldSelector from '$lib/components/common/FieldSelector.svelte';

	import TableHeader from './TableHeader.svelte';
	import TableNavigation from './TableNavigation.svelte';
	import TableActions from './TableActions.svelte';
	import TableView from './TableView.svelte';
	import TableFooter from './TableFooter.svelte';
	import TableRecordCounter from './TableRecordCounter.svelte';
	import BlockMobile from './BlockMobile.svelte';

	// state - generic
	let isLoading = $state(false);
	let isParsing = $state(false);

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

	// state - table
	let selectedFields: string[] = $state([]);

	// derived states - table metas
	const isTableEmpty = $derived(parsedData.length <= 0);
	const fields: string[] = $derived(
		!isTableEmpty ? Object.keys(parsedData[0]) : []
	);
	const records: RowData[] = $derived(
		!isTableEmpty ? parsedData.slice(startIndex, endIndex) : []
	);

	$effect(() => {
		selectedFields = fields;
	});

	// event handlers
	function clearTableInfo() {
		parsedData = [];
		page = 1;
		perPage = 25;
	}

	function parseCSV(file: File, chunkSize = 500) {
		isLoading = true;
		isParsing = true;

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
				isParsing = false;
			},
			error() {
				isLoading = false;
				isParsing = false;
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
		if (page <= totalPage) {
			page += 1;
		}
	}

	function onPrevClick() {
		if (page > 1) {
			page -= 1;
		}
	}

	function getSelectedFile(): File | null {
		if (isParsing) {
			alert('please wait until parsing is done');
			return null;
		}

		if (selectedFileIndex === null) {
			alert('selected file index is null');
			return null;
		}

		if (selectedFileIndex < 0) {
			alert('invalid file index');
			return null;
		}

		if (selectedFields.length <= 0) {
			alert('Cannot export empty field');
			return null;
		}

		if (!fileList) {
			alert('file list is empty!');
			return null;
		}
		return fileList[selectedFileIndex];
	}

	function onExportJSONClick() {
		try {
			const target = getSelectedFile();
			if (!target) {
				alert('target is missing');
				return;
			}

			const json = parsedData.map((row) =>
				selectedFields.reduce(
					(prev, field) => ({
						...prev,
						[field.split(' ').join('_').toLocaleLowerCase()]: row[field]
					}),
					{}
				)
			);

			const content = JSON.stringify(json, null, 2);
			downloadFile(content, 'tukang-csv-result.json', 'application/json');
		} catch (error) {
			console.error(error);
		}
	}

	function onExportTextClick() {
		const target = getSelectedFile();
		if (!target) {
			alert('target is missing');
			return;
		}

		// Build CSV content
		const header = selectedFields.join(',');
		const data = parsedData
			.map((row) => selectedFields.map((field) => row[field]).join(','))
			.join('\n');
		const content = `${header}\n${data}`;

		// Create download
		downloadFile(content, 'tukang-csv-result.csv', 'text/csv');
	}
</script>

<Seo
	categories={['Apps']}
	description="Collection of CSV Utilities"
	title="Tukang CSV"
/>
<div class="relative">
	<BlockMobile />
	<div class="flex h-[calc(100vh-56px)] w-full items-start">
		<div class="h-full w-2/6 xl:w-1/5">
			<div class={clsx(['h-full'])}>
				<FileDirectory bind:fileList {onFileSelect} {selectedFileIndex} />
			</div>
		</div>
		<div class="relative h-full w-4/6 xl:w-4/5">
			<div class="h-full w-full overflow-scroll">
				<div class="flex h-full flex-col justify-between dark:bg-stone-900">
					<TableHeader {isTableEmpty}>
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-2">
								<TableNavigation
									{onPrevClick}
									{onNextClick}
									{isTableEmpty}
									bind:page
								/>
								<FieldSelector {isTableEmpty} {fields} bind:selectedFields />
							</div>
							<TableActions
								{onExportJSONClick}
								{onExportTextClick}
								{isTableEmpty}
							/>
						</div>
					</TableHeader>
					{#if !isTableEmpty}
						<TableView fields={selectedFields} {records} {isLoading} />
					{:else}
						<div class="flex h-full w-full items-center justify-center">
							<p class="text-2xl font-bold text-stone-400 dark:text-stone-700">
								No file selected
							</p>
						</div>
					{/if}
					<TableFooter {isTableEmpty} {isLoading}>
						<TableRecordCounter {startIndex} {endIndex} {totalRecords} />
					</TableFooter>
				</div>
			</div>
		</div>
	</div>
</div>
