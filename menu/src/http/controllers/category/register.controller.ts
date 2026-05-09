import type { Request, Response } from "express"
import categorySchema from "@entities/category/schemas/CategorySchema.js"

function RegisterCategory(req: Request, res: Response) {
	try {
		const { name, slug } = categorySchema.parse(req.body)
	} catch (err: Error | any) {
		console.error(err)
	}
}


export { RegisterCategory }
