import type { UUID } from "crypto";

export type CategoryRow = {
	id: UUID;
	name: string;
	slug: string;
}
