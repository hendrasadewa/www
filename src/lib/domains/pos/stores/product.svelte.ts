import type { PaginatedProductResponse } from '../dto/product.dto';
import type { Product } from '../entity/product.entity';
import { createProductRepository } from '../repository/product.repository';

interface State {
	list: Product[];
	selected: Product | null;
	skip: number;
	limit: number;
	total: number;
}

export const productStore = $state<State>({
	list: [],
	skip: 0,
	limit: 0,
	total: 0,
	selected: null
});

const productRepository = createProductRepository();

export const productStoreActions = {
	get: async (limit = 25, skip = 0, category = '', q = '') => {
		let response: PaginatedProductResponse;

		if (q !== '') {
			response = await productRepository.search(q, limit, skip);
		} else if (category !== '') {
			response = await productRepository.getByCategory(category, limit, skip);
		} else {
			response = await productRepository.get(limit, skip);
		}

		productStore.list = response.products;
		productStore.total = response.total;

		return response;
	},

	getById: async (id: number) => {
		const response = await productRepository.getById(id);
		productStore.selected = response;
	},

	getCategories: async () => {
		const response = await productRepository.getCategories();
		return response;
	}
};
