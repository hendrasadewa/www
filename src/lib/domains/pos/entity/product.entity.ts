export interface ProductCategory {
	slug: string;
	name: string;
	url: string;
}

export interface ProductDimension {
	width: number;
	height: number;
	depth: number;
}

export interface ProductReview {
	rating: number;
	comment: string;
	date: Date;
	reviewerName: string;
	reviewerEmail: string;
}

export interface ProductMeta {
	createdAt: Date;
	updatedAt: Date;
	barcode: string;
	qrCode: string;
}

export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: ProductDimension;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: ProductReview[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: ProductMeta;
	thumbnail: string;
	images: string[];
}
