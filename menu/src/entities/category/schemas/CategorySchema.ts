import { z } from "zod";

const categorySchema = z.object({
	name: z.string().min(12),
	slug: z.string().min(12)
});


export default categorySchema;
