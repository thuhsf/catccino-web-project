type Product = {
	name: string;
	description: string;
	price: number;
	available: boolean;
	imageUrl: string;
}

export interface ProductRequestDTO {
	product: Product;
}
