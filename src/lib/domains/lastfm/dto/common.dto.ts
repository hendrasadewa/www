import type { ImageSize } from '../entity/common.entity';

export interface OpensearchQuery {
	'#text': string;
	role: string;
	searchTerms: string;
	startPage: string;
}

export interface SearchResultsResponse {
	'opensearch:Query': OpensearchQuery;
	'opensearch:totalResults': string;
	'opensearch:startIndex': string;
	'opensearch:itemsPerPage': string;
	'@attr': AttrDTO;
}

export interface PaginatedResponse {
	'@attr': AttrPaginationDTO;
}

export interface AttrPaginationDTO {
	page: string;
	perPage: string;
	totalPages: string;
	total: string;
}

export interface AttrDTO {
	for: string;
}

export interface ImageDTO {
	'#text': string;
	size: ImageSize;
}

export interface LastFMResponse<T> {
	results: T;
}
