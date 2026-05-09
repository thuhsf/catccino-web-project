import { randomUUID, type UUID } from "node:crypto";

class Category {
	private Id: UUID = randomUUID();
	private Name: string = "";
	private Slug: string = "";

	get getId() {
		return this.Id;
	}

	get getName() {
		return this.Name;
	}

	set setName(value: string) {
		this.Name = value;
	}

	get getSlug() {
		return this.Slug;
	}

	set setSlug(value: string) {
		this.Slug = value;
	}
}

export default Category;
