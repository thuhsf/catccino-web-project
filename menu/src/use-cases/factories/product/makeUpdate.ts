import { UpdateProductUseCase } from "../../product/UpdateProductUseCase.js";
import type { IProductFactory } from "@repositories/interfaces/IProductRepository.js";

export function makeUpdate(productFactory: IProductFactory) {
    const productFact = productFactory.createRepository();
    const service = new UpdateProductUseCase(productFact);

    return service;
}
