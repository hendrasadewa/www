import { createAPIInstance } from '../config/dummyjson.config';
import type { AddToCartRequest, PaginatedCartResponse } from '../dto/carts.dto';
import type { PaginatedProductResponse } from '../dto/product.dto';
import type { ShoppingCarts } from '../entity/carts.entity';
import type { ProductCategory } from '../entity/product.entity';

export function createCartRepository(token?: string) {
	const api = createAPIInstance(token);
	return {
		getById: (id: number) => api.get<ShoppingCarts>(`carts/${id}`).json(),
		getByUserId: (id: number) =>
			api.get<PaginatedCartResponse>(`carts/user/${id}`).json(),

		add: (req: AddToCartRequest) =>
			api
				.post<PaginatedProductResponse>(`carts/add`, {
					json: req
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
