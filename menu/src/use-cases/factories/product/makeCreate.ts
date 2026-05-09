import type { IProductFactory } from "@repositories/interfaces/IProductRepository.js";
import CreateProductUseCase from "../../product/CreateProductUseCase.js";

export function makeCreate(productFactory: IProductFactory) {
	const factory = productFactory.createRepository();
	const service = new CreateProductUseCase(factory);

	return service;
}
