import { createAPIInstance } from '../config/dummyjson.config';
import type { PaginatedProductResponse } from '../dto/product.dto';
import type { Product, ProductCategory } from '../entity/product.entity';

export function createProductRepository(token?: string) {
	const api = createAPIInstance(token);
	return {
		getById: (id: number) => api.get<Product>(`products/${id}`).json(),
		get: (limit = 0, skip = 0) =>
			api
				.get<PaginatedProductResponse>('products', {
					searchParams: { limit, skip }
				})
				.json(),
		getByCategory: (category: string, limit = 0, skip = 0) =>
			api
				.get<PaginatedProductResponse>(`products/category/${category}`, {
					searchParams: { limit, skip }
				})
				.json(),
		search: (q: string = '', limit = 0, skip = 0) =>
			api
				.get<PaginatedProductResponse>('products/search', {
					searchParams: { q, limit, skip }
				})
				.json(),
		getCategories: () =>
			api.get<ProductCategory[]>('products/categories').json(),
		getCategoryList: () => api.get<string[]>('products/category-list').json()
	};
}
