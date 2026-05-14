import { ProductFactory } from "@repositories/ProductRepository.js";
import { makeList } from "@use-cases/factories/product/makeList.js";
import type { Request, Response } from "express";

async function ListProductControlelr(req: Request, res: Response) {
	try {

		const factory = new ProductFactory();
		const list = makeList(factory);

		const product = await list.execute();

		return res.status(200).json(product);

	} catch (err: Error | any) {
		console.error(err);

		res
			.status(400)
			.json({
				status: 400,
				message: "Houve um erro interno",
				error: err
			});
	};
};

export { ListProductControlelr };
