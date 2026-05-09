import Category from "@entities/category/Category.js";
import type { CategoryRequestDTO } from "@entities/category/CategoryRequestDTO.js";
import type { CategoryResponseDTO } from "@entities/category/CategoryResponseDTO.js";
import type { ICategoryRepository } from "@repositories/interfaces/ICategoryRepository.js";

class CreateCategoryUseCase {
	constructor(private readonly repository: ICategoryRepository) { }

	async execute(data: CategoryRequestDTO): Promise<CategoryResponseDTO> {
		const findCategory = await this.repository.findByName(data.name);

		if (findCategory) {
			throw new Error("Categoria já existe");
		}

		const category = new Category({
			name: data.name,
			slug: data.slug
		})

		const createCategory = await this.repository.create(category);

		if (!createCategory) {
			throw new Error("Falha ao criar categoria");
		}

		return {
			id: createCategory.getId(),
			name: createCategory.getName(),
			slug: createCategory.getSlug()
		}
	}
}

export default CreateCategoryUseCase
