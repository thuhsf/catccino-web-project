import type { UUID } from "crypto";

export type ProductRow = {
	id: UUID;
	name: string;
	description: string;
	price: number;
	category_id: UUID;
	available: boolean;
	image_url: string;
	created_at: Date;
	updated_at: Date;
};
