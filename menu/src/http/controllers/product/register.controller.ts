import type { Request, Response } from "express";
import productSchema from "@entities/product/schemas/ProductSchema.js";
import { makeCreate } from "@use-cases/factories/product/makeCreate.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { CategoryFactory } from "@repositories/CategoryRepository.js";

async function RegisterProductController(req: Request, res: Response) {
    try {
        const data = productSchema.parse(req.body);

        const productFact = new ProductFactory();
        const categoryFact = new CategoryFactory();

        const register = makeCreate(productFact, categoryFact);


        const product = await register.execute({
            product: { ...data }
        });

        res
            .status(201)
            .json({
                message: "Produto criado com sucesso",
                status: 201,
                ...product
            });



    } catch (err: Error | any) {
        console.error(err);
        res
            .status(500)
            .json({
                message: "Erro ao criar produto",
                status: 500
            });
    };
};


export { RegisterProductController };
