export interface Pagination {
	page: number;
	perPage: number;
	totalPage: number;
	totalRecords: number;
	startIndex: number;
	endIndex: number;
}

export interface TableInfo<T = any> {
	fields: string[];
	records: Array<Record<string, T>>;
	selected: Record<string, T> | null;
}
