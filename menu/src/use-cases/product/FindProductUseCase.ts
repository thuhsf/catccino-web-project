import type { ProductResponseDTO } from "@entities/product/ProductResponseDTO.js";
import type { IProductRepository } from "@repositories/interfaces/IProductRepository.js";

class FindProductUseCase {
    constructor(private readonly repository: IProductRepository) { };

    async execute(name: string): Promise<ProductResponseDTO> {
        const product = await this.repository.findByName(name);

        if (!product) {
            throw new Error("Esse produto não existe");
        };

        return {
            product: {
                id: product.getId(),
                name: product.getName(),
                description: product.getDescription(),
                price: product.getPrice(),
                categoryId: product.getCategoryId(),
                available: product.getAvailable(),
                imageUrl: product.getImageUrl(),
                createdAt: product.getCreatedAt(),
                updatedAt: product.getUpdatedAt(),
            }
        }
    };
};

export { FindProductUseCase };