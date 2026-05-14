import { UpdateCategoryUseCase } from "../../product/UpdateProductUseCase.js";
import type { IProductFactory } from "@repositories/interfaces/IProductRepository.js";

export function makeUpdate(productFactory: IProductFactory) {
    const productFact = productFactory.createRepository();
    const service = new UpdateCategoryUseCase(productFact);

    return service;
}
