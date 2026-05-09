import { z } from "zod"

const productSchema = z.object({
	name: z.string(),
	description: z.string(),
	price: z.number(),
	available: z.string(),
	imageUrl: z.string(),
});


export default productSchema;
