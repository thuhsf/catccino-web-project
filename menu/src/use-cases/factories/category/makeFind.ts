import type { ICategoryFactory } from "@repositories/interfaces/ICategoryRepository.js";
import { FindCategoryUseCase } from "@use-cases/category/FindCategoryUseCase.js";

export function makeFind(categoryFactory: ICategoryFactory) {
    const factory = categoryFactory.createRepository();
    const service = new FindCategoryUseCase(factory);

    return service;
}
