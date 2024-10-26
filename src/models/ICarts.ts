export interface ICarts {
	carts: ICart[];
	total: number;
	skip: number;
	limit: number;
}
interface Products {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedTotal: number;
	thumbnail: string;
}
export interface ICart {
	id: number;
	products: Products[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
export type IDJResponse =  {
	total: number;
	skip: number;
	limit: number;
}