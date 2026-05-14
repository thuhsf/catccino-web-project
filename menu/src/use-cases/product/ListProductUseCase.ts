import type { ArrProductResponseDTO } from "@entities/product/ProductResponseDTO.js";
import type { IProductRepository } from "@repositories/interfaces/IProductRepository.js";

class ListProductUseCase {
	constructor(private readonly repository: IProductRepository) { };

	async execute(): Promise<ArrProductResponseDTO> {
		const products = await this.repository.listAll();

		return {
			products: products.map((product) => ({
				id: product.getId(),
				name: product.getName(),
				description: product.getDescription(),
				price: product.getPrice(),
				categoryId: product.getCategoryId(),
				available: product.getAvailable(),
				imageUrl: product.getImageUrl(),
				createdAt: product.getCreatedAt(),
				updatedAt: product.getUpdatedAt(),
			}))
		};
	};
};


export { ListProductUseCase };
