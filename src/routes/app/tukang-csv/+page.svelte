<script lang="ts">
	// 3rd parties
	import clsx from 'clsx';

	// common components
	import Seo from '$lib/components/common/SEO.svelte';
	import FieldSelector from './_components/FieldSelector.svelte';

	// components
	import FileDirectory from './_components/FileDirectory.svelte';
	import TableHeader from './_components/TableHeader.svelte';
	import TableNavigation from './_components/TableNavigation.svelte';
	import TableActions from './_components/TableActions.svelte';
	import TableView from './_components/TableView.svelte';
	import TableFooter from './_components/TableFooter.svelte';
	import TableRecordCounter from './_components/TableRecordCounter.svelte';
	import BlockMobile from './_components/BlockMobile.svelte';

	// state managements
	import { PaginationStore } from './_stores/pagination.svelte';
	import { FileStore } from './_stores/file.svelte';
	import { TableStore } from './_stores/table.svelte';
	import { CSVStore } from './_stores/csv.svelte';

	// state - generic
	const file = new FileStore();
	const pagination = new PaginationStore(25);
	const table = new TableStore();
	const csv = new CSVStore();

	// computed values
	const isTableEmpty = $derived(table.records.length <= 0);

	// Event handlers
	function onFileSelect(index: number) {
		file.onFileSelect(index);

		if (!file.selectedFile) {
			return;
		}

		csv.loadFile(file.selectedFile);
		csv.parseCSV();

		// reset table
		table.fields = [];
		table.records = [];
		pagination.page = 1;
	}

	function onExportJSONClick() {
		csv.exportJSON(table.selectedFields);
	}

	function onExportTextClick() {
		csv.exportCSV(table.selectedFields);
	}

	// Effects
	$effect(() => {
		if (table.fields.length > 0 || csv.parsedData.length <= 0) {
			return;
		}

		if (!csv.isLoading) {
			table.fields = Object.keys(csv.parsedData[0]);
		}
	});

	$effect(() => {
		if (csv.parsedData.length <= 0) {
			return;
		}
		table.records = csv.parsedData.slice(
			pagination.startIndex,
			pagination.endIndex
		);
	});

	$effect(() => {
		if (!csv.isLoading) {
			pagination.totalRecords = csv.parsedData.length;
		}
	});
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
				<FileDirectory
					bind:fileList={file.fileList}
					selectedFileIndex={file.selectedFileIndex}
					{onFileSelect}
				/>
			</div>
		</div>
		<div class="relative h-full w-4/6 xl:w-4/5">
			<div class="h-full w-full overflow-scroll">
				<div class="flex h-full flex-col justify-between dark:bg-stone-900">
					<TableHeader isTableEmpty>
						<FieldSelector
							{isTableEmpty}
							fields={table.fields}
							bind:selectedFields={table.selectedFields}
						/>
						<TableActions
							{onExportJSONClick}
							{onExportTextClick}
							{isTableEmpty}
						/>
					</TableHeader>
					{#if !isTableEmpty}
						<TableView
							fields={table.selectedFields}
							records={table.records}
							isLoading={csv.isLoading}
						/>
					{:else}
						<div class="flex h-full w-full items-center justify-center">
							<p class="text-2xl font-bold text-stone-400 dark:text-stone-700">
								No file selected
							</p>
						</div>
					{/if}
					<TableFooter isLoading={csv.isLoading}>
						<TableNavigation
							onPrevClick={pagination.prevPage}
							onNextClick={pagination.nextPage}
							bind:page={pagination.page}
							{isTableEmpty}
						/>
						<TableRecordCounter
							startIndex={pagination.startIndex}
							endIndex={pagination.endIndex}
							totalRecords={pagination.totalRecords}
						/>
					</TableFooter>
				</div>
			</div>
		</div>
	</div>
</div>
