import type { UUID } from "crypto";
import type Category from "../../entities/category/Category.js";

export interface ICategoryRepository {
	create: (data: Category) => Category | null;
	update: (id: UUID) => Category | null;
	listAll: () => Category | null;
	findByName: (name: string) => Category | null;
}
