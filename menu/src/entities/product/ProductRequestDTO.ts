import type { UUID } from "node:crypto";

type Product = {
	name: string;
	description: string;
	price: number;
	categoryId: UUID;
	available: boolean;
	imageUrl: string;
}

export interface ProductRequestDTO {
	product: Product;
}
