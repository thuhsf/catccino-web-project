import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { makeFind } from "@use-cases/factories/category/makeFind.js";
import type { Request, Response } from "express";

async function FindCategoryController(req: Request, res: Response) {
    try {
        const id = req.params.id as string | undefined;

        if (id == undefined) {
            throw new Error("Id não reconhecido ou incompleto")
        }

        const factory = new CategoryFactory();
        const find = makeFind(factory);

        const category = await find.execute(id);

        return res.status(200).json(category);


    } catch (err: Error | any) {
        console.error(err);

        return res.status(400).json({
            error: err.message,
        });
    }
}

export { FindCategoryController }