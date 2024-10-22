export interface IProduct {
	products: product[];
	total: number;
	skip: number;
	limit: number;
}
interface Dimensions {
	width: number;
	height: number;
	depth: number;
}
export interface Reviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
interface Meta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
interface product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand?: string;
	sku: string;
	weight: number;
	dimensions: Dimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: Reviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: Meta;
	images: string[];
	thumbnail: string;
}