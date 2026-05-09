import type { UUID } from "node:crypto";

export interface CategoryRequestDTO {
	id: UUID;
	name: string;
	slug: string;
}
