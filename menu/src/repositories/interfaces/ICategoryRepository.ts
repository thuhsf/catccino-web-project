import type Category from "@entities/category/Category.js";
import type { UUID } from "node:crypto";

export interface ICategoryRepository {
	create: (data: Category) => Promise<Category | null>;
	update: (data: Category) => Promise<Category | null>;
	listAll: () => Promise<Category[]>;
	findByName: (name: string) => Promise<Category | null>;
	findById: (id: UUID) => Promise<Category | null>
}


export interface ICategoryFactory {
	createRepository(): ICategoryRepository;
}
