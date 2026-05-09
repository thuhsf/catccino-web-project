import type { UUID } from "node:crypto";

export interface CategoryResponseDTO {
	id: UUID;
	name: string;
	slug: string;
}
