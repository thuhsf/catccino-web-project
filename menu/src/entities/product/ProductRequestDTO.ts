type Product = {
	name: string;
	description: string;
	price: number;
	categoryId: string;
	available?: boolean | undefined;
	imageUrl?: string | undefined;
}

export interface ProductRequestDTO {
	product: Product;
}
