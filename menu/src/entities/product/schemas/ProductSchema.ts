import { z } from "zod"

const productSchema = z.object({
	name: z.string().min(4).max(14),
	description: z.string().min(8).max(30),
	price: z.number().positive().min(0.01).max(1000),
	available: z.string(),
	imageUrl: z.string(),
});


export default productSchema;
