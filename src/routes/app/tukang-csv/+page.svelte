<script lang="ts">
	import {
		CSVStore,
		FileStore,
		PaginationStore,
		TableStore
	} from '$lib/domains/tukang-csv/stores';
	import { cn } from '$lib/commons/utils/css-utils';
	import { SEO } from '$lib/commons/components/SEO';
	import {
		BlockMobile,
		FieldSelector,
		FileDirectory,
		TableActions,
		TableFooter,
		TableHeader,
		TableNavigation,
		TableRecordCounter,
		TableView
	} from '$lib/domains/tukang-csv/components';

	const csv = new CSVStore();
	const file = new FileStore();
	const pagination = new PaginationStore(25);
	const table = new TableStore();

	// computed values
	const isTableEmpty = $derived(table.records.length <= 0);

	// Event handlers
	export function onFileSelect(index: number) {
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

	export function onExportJSONClick() {
		csv.exportJSON(table.selectedFields);
	}

	export function onExportTextClick() {
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

<SEO
	categories={['Apps']}
	description="Collection of CSV Utilities"
	title="Tukang CSV"
/>
<div class="relative">
	<BlockMobile />
	<div class="flex h-[calc(100vh-36px)] w-full items-start">
		<div class="h-full w-2/6 xl:w-1/5">
			<div class={cn(['h-full'])}>
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
