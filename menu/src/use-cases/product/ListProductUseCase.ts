import type { IProductRepository } from "@repositories/interfaces/IProductRepository.js";

class ListProductUseCase {
	constructor(private readonly repository: IProductRepository) { }

	async execute() {

	}
};


export { ListProductUseCase }
