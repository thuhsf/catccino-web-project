import type { Request, Response } from "express"
import categorySchema from "@entities/category/schemas/CategorySchema.js"
import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { makeCreate } from "../../../use-cases/factories/category/makeCreate.js";

async function RegisterCategory(req: Request, res: Response) {
	try {
		const { name, slug } = categorySchema.parse(req.body);

		const factory = new CategoryFactory();
		const register = makeCreate(factory);

		await register.execute({ name, slug });

		res
			.status(201)
			.json({
				message: "Categoria criada com sucesso",
				status: 201
			})

	} catch (err: Error | any) {
		console.error(err)
	}
}


export { RegisterCategory }
