import type { Product } from './product.entity';

export interface ShoppingCarts {
	id: number;
	products: Product[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
