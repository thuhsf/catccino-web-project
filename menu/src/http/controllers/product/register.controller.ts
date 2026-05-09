import productSchema from "@entities/product/schemas/ProductSchema.js";
import type { Request, Response } from "express";
import { makeCreate } from "../../../use-cases/factories/product/makeCreate.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { CategoryFactory } from "@repositories/CategoryRepository.js";

async function RegisterProduct(req: Request, res: Response) {
	try {
		const data = productSchema.parse(req.body);

		const productFact = new ProductFactory();
		const categoryFact = new CategoryFactory();

		const register = makeCreate(productFact, categoryFact);


		await register.execute({
			product: { ...data }
		});

	} catch (err: Error | any) {
		console.error(err)
	}
}


export { RegisterProduct }
