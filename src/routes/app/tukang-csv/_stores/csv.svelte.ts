import Papa from 'papaparse';
import type { ParseStepResult, Parser } from 'papaparse';

import type { RowData } from '$lib/entity/csv.entity';
import { downloadFile } from '$lib/utils/file-utils';

export class CSVStore {
	isParsing = $state(false);
	isLoading = $state(false);

	// control state
	isPaused = $state(false);
	isAborted = $state(false);

	isPreviewReady = $state(false);
	parsedData: RowData[] = $state([]);
	file: File | null = $state(null);
	previewRowsCount = $state(0);
	chunkSize = $state(0);
	maxRows = $state(0);

	constructor(chunkSize = 500, previewSize = 30, maxRows = 10_000) {
		this.previewRowsCount = previewSize > 100 ? 100 : previewSize;
		this.chunkSize = chunkSize > 1_000 ? 1_000 : chunkSize;
		this.maxRows = maxRows > 10_000 ? 10_000 : maxRows;
	}

	loadFile = (file: File) => {
		this.parsedData = [];
		this.file = file;
	};

	clearControlState = () => {
		this.isLoading = false;
		this.isParsing = false;
		this.isPaused = false;
		this.isAborted = false;
	};

	// parsing data handlers
	parseStep = (results: ParseStepResult<RowData>, parser: Parser) => {
		if (this.isPaused) {
			parser.pause();
		}

		if (this.parsedData.length >= this.maxRows) {
			alert('Maximum rows exceeded');
			parser.abort();
			this.isAborted = true;
		}

		if (this.isLoading && this.parsedData.length > this.chunkSize) {
			this.isLoading = false;
		}

		this.parsedData = [...this.parsedData, results.data];
	};

	onParseComplete = () => {
		this.clearControlState();
	};

	onParseError = (error: Error, file: Papa.LocalFile) => {
		this.clearControlState();

		if (error instanceof Error) {
			console.error(error);
		}
	};

	parseCSV = () => {
		if (!this.file) {
			return;
		}

		this.isLoading = true;
		this.isParsing = true;

		Papa.parse<RowData>(this.file, {
			header: true,
			worker: true,
			chunkSize: this.chunkSize,
			step: this.parseStep,
			complete: this.onParseComplete,
			error: this.onParseError
		});
	};

	composeOutputName = (ext: string = '.txt') => {
		if (!this.file) {
			throw new Error('selected file is required!');
		}

		const splitted = this.file.name.split('.');
		if (splitted.length <= 0) {
			return `tkg-csv-${ext}`;
		}
		const [name] = splitted;
		return `tkg-csv-${name}-${ext}`;
	};

	exportJSON = (selectedFields: string[] = []) => {
		const json = this.parsedData.map((row) =>
			selectedFields.reduce(
				(prev, field) => ({
					...prev,
					[field.split(' ').join('_').toLocaleLowerCase()]: row[field]
				}),
				{}
			)
		);

		const content = JSON.stringify(json, null, 2);
		const filename = this.composeOutputName('.json');
		downloadFile(content, filename, 'application/json');
	};

	exportCSV = (selectedFields: string[] = []) => {
		// Build CSV content
		const header = selectedFields.join(',');
		const data = this.parsedData
			.map((row) => selectedFields.map((field) => row[field]).join(','))
			.join('\n');

		const content = `${header}\n${data}`;

		// Create download
		const filename = this.composeOutputName('.csv');
		downloadFile(content, filename, 'application/json');
	};
}
