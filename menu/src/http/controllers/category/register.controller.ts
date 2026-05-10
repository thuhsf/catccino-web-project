import redisClient from '@config/redisClient.js';
import type { Request, Response } from "express"
import categorySchema from "@entities/category/schemas/CategorySchema.js"
import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { makeCreate } from "../../../use-cases/factories/category/makeCreate.js";

async function RegisterCategory(req: Request, res: Response) {
	try {
		const { name, slug } = categorySchema.parse(req.body);

		const factory = new CategoryFactory();
		const register = makeCreate(factory);

		const category = await register.execute({ name, slug });

		await redisClient.del("categories");

		res
			.status(201)
			.json({
				message: "Categoria criada com sucesso",
				status: 201,
				category
			});

	} catch (err: Error | any) {
		console.error(err);
		res
			.status(500)
			.json({
				message: "Erro ao criar categoria",
				status: 500
			});
	}
}


export { RegisterCategory }
