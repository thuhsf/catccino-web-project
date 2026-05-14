import productSchema from "@entities/product/schemas/ProductSchema.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { makeFind } from "@use-cases/factories/product/makeFind.js";
import type { Request, Response } from "express";

async function FindProductController(req: Request, res: Response) {
    try {
        const { name } = productSchema.parse(req.body);

        const factory = new ProductFactory();
        const find = makeFind(factory);

        const product = await find.execute(name);

        return res.status(200).json(product);

    } catch (err) {
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

export { FindProductController };