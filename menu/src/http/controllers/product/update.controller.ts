import productSchema from "@entities/product/schemas/ProductSchema.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { makeUpdate } from "@use-cases/factories/product/makeUpdate.js";
import type { Request, Response } from "express";

async function UpdateProductController(req: Request, res: Response) {
    try {

        const id = req.params.id as string | undefined;

        if (id == undefined) {
            throw new Error("Id não reconhecido ou incompleto");
        };

        const data = productSchema.parse(req.body);

        const factory = new ProductFactory();
        const update = makeUpdate(factory);

        const product = await update.execute({ product: { id, ...data } });

        return res.status(200).json({ ...product });

    } catch (err) {
        console.error(err);

        res
            .status(400)
            .json({
                status: 400,
                message: "Houve um erro interno",
                err: err
            });
    };
};

export { UpdateProductController };