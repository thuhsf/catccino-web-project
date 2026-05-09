import { randomUUID, type UUID } from "node:crypto";

type CategoryProps = {
	id: UUID;
	name: string;
	slug: string;
}

class Category {
	private readonly Id: UUID = randomUUID();
	private Name: string;
	private Slug: string;

	constructor(props: CategoryProps) {
		this.Id = props.id;
		this.Name = props.name;
		this.Slug = props.slug;
	}

	getId() {
		return this.Id;
	}

	getName() {
		return this.Name;
	}

	getSlug() {
		return this.Slug;
	}

	rename(value: string) {
		if (value.length < 3) {
			throw new Error("Invalid category name");
		}

		this.Name = value;
	}

	changeSlug(value: string) {
		this.Slug = value;
	}

}

export default Category;
