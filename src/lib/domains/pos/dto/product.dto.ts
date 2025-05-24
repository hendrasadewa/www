import type { Product } from '../entity/product.entity';

export interface PaginatedProductResponse extends PaginatedResponse {
	products: Product[];
}
