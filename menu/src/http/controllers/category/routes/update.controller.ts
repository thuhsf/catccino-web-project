import categorySchema from "@entities/category/schemas/CategorySchema.js";
import type { Request, Response } from "express";
import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { makeUpdate } from "@use-cases/factories/category/makeUpdate.js";

async function UpdateCategoryController(
    req: Request,
    res: Response
) {
    try {
        const id = req.params.id as string | undefined;

        if (id == undefined) {
            throw new Error("Id não reconhecido ou incompleto")
        }

        const data = categorySchema.parse(req.body);

        const factory = new CategoryFactory();
        const update = makeUpdate(factory);

        const category = await update.execute({
            id,
            ...data,
        });

        return res.status(200).json(category);

    } catch (err: any) {
        console.error(err);

        return res.status(400).json({
            error: err.message,
        });
    }
}

export { UpdateCategoryController }