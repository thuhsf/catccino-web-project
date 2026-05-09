import type { UUID } from "crypto";
import type Product from "../../entities/product/Product.js";

export interface IProductRepository {
	create: (data: Product) => Product | null;
	update: (id: UUID) => Product | null;
	listAll: () => Product | null;
	findByName: (name: string) => Product | null;
}
