import type { RowData } from '$lib/entity/csv.entity';

export class TableStore {
	totalRecord = $state(0);
	fields: string[] = $state([]);
	selectedFields: string[] = $state([]);
	records: RowData[] = $state([]);

	isEmpty = $state(false);

	constructor(totalRecord = 0) {
		this.totalRecord = totalRecord;

		$effect(() => {
			this.selectedFields = this.fields;
		});
	}
}
