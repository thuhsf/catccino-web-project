import productSchema from "@entities/product/schemas/ProductSchema.js";
import type { Request, Response } from "express";
import { makeCreate } from "../../../use-cases/factories/product/makeCreate.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { CategoryFactory } from "@repositories/CategoryRepository.js";
import redisClient from "@config/redisClient.js";


async function RegisterProduct(req: Request, res: Response) {
	try {
		const data = productSchema.parse(req.body);

		const productFact = new ProductFactory();
		const categoryFact = new CategoryFactory();

		const register = makeCreate(productFact, categoryFact);


		const product = await register.execute({
			product: { ...data }
		});

		await redisClient.del("products");

		res
			.status(201)
			.json({
				message: "Produto criado com sucesso",
				status: 201,
				product
			})



	} catch (err: Error | any) {
		console.error(err);
		res
			.status(500)
			.json({
				message: "Erro ao criar produto",
				status: 500
			});
	}
}


export { RegisterProduct }
