import Papa from 'papaparse';
import type { ParseStepResult } from 'papaparse';

import type { RowData } from '$lib/entity/csv.entity';
import { downloadFile } from '$lib/utils/file-utils';

export class FileStore {
	fileList: FileList | null = $state(null);
	selectedFileIndex: number | null = $state(null);

	// getters
	get selectedFile() {
		if (this.selectedFileIndex === null) {
			alert('selected file index is null');
			return null;
		}

		if (this.selectedFileIndex < 0) {
			alert('invalid file index');
			return null;
		}

		if (!this.fileList) {
			alert('file list is empty!');
			return null;
		}
		return this.fileList[this.selectedFileIndex];
	}

	// file managements
	onFileSelect = (index: number) => {
		if (!this.fileList) {
			return;
		}

		if (index === this.selectedFileIndex) {
			this.selectedFileIndex = null;
			return;
		}

		this.selectedFileIndex = index;
	};
}
