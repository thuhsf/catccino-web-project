import { CategoryFactory } from "@repositories/CategoryRepository.js";
import { makeList } from "@use-cases/factories/category/makeList.js";
import type { Request, Response } from "express";

async function ListCategoryController(req: Request, res: Response) {
    try {

        const factory = new CategoryFactory();
        const list = makeList(factory);

        const category = await list.execute();

        return res.status(200).json(category);


    } catch (err: Error | any) {
        console.error(err);

        return res.status(400).json({
            error: err.message,
        });
    };
};

export { ListCategoryController };