import type { Request, Response } from "express";
import { productSchema } from "@entities/product/schemas/ProductSchema.js";
import { makeCreateProduct } from "@use-cases/factories/product/makeCreate.js";
import { ProductFactory } from "@repositories/ProductRepository.js";
import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { uploadProductImage } from "@/lib/aws/s3/index.js";

async function RegisterProductController(req: Request, res: Response) {
    try {
        const data = productSchema.parse(req.body);

        let imageUrl = "";

        if (req.file) {
            const uploadImg = await uploadProductImage({
                fileBuffer: req.file.buffer,
                mimetype: req.file.mimetype
            });

            imageUrl = uploadImg.url;
        }

        const productFact = new ProductFactory();
        const categoryFact = new CategoryFactory();

        const registerProduct = makeCreateProduct(productFact, categoryFact);


        const product = await registerProduct.execute({
            product: {
                ...data,
                imageUrl
            }
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
