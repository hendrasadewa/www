import type { Pagination, TableInfo } from '$lib/types/table';

export const initialPagination: Pagination = {
	page: 1,
	perPage: 25,
	totalPage: 0,
	totalRecords: 0,
	startIndex: 0,
	endIndex: 0
};
export const initialTableInfo: TableInfo = {
	fields: [],
	records: [],
	selected: null
};
