import type { ICategoryFactory } from "@repositories/interfaces/ICategoryRepository.js";
import CreateCategoryUseCase from "../../category/CreateCategoryUseCase.js";

export function makeCreate(categoryFactory: ICategoryFactory) {
	const factory = categoryFactory.createRepository();
	const service = new CreateCategoryUseCase(factory);

	return service;
}
