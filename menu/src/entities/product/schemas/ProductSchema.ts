import { z } from "zod";

const productSchema = z.object({
	name: z
		.string()
		.min(4)
		.max(40),

	description: z
		.string()
		.min(8)
		.max(300),

	price: z.coerce
		.number()
		.positive()
		.max(1000),

	categoryId: z
		.string(),

	available: z
		.boolean()
		.optional(),

	imageUrl: z
		.string()
		.url()
		.optional(),
});

export default productSchema;
