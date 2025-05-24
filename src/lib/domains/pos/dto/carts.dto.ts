import type { ShoppingCarts } from '../entity/carts.entity';
import type { Product } from '../entity/product.entity';

export interface PaginatedCartResponse extends PaginatedResponse {
	carts: ShoppingCarts[];
}

export interface AddToCartRequest {
	userId: number;
	products: Array<{ id: number; quantity: number }>;
}
