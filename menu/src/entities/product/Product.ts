import { type UUID } from "node:crypto"

class Product {
	private Id: UUID | null = null;
	private Name: string | undefined = undefined;
	private Description: string | undefined = undefined;
	private Price: number | null = null;
	private CategoryId: UUID | null = null;
	private Available: boolean | null = null;
	private ImageUrl: string | undefined = undefined;
	private CreatedAt: Date | null = null;
	private UpdatedAt: Date | null = null;

	get getId() {
		return this.Id;
	}

	get getName() {
		return this.Name;
	}
	set setName(value: string) {
		this.Name = value;
	}

	get getDescription() {
		return this.Description;
	}
	set setDescription(value: string) {
		this.Description = value;
	}

	get getPrice() {
		return this.Price;
	}
	set setPrice(value: number) {
		this.Price = value;
	}

	get getCategoryId() {
		return this.CategoryId;
	}

	get getAvailable() {
		return this.Available;
	}
	set setAvailable(value: boolean) {
		this.Available = value;
	}

	get getImageUrl() {
		return this.ImageUrl;
	}
	set setImageUrl(value: string) {
		this.ImageUrl = value;
	}

	get getCreatedAt() {
		return this.CreatedAt;
	}
	set setCreatedAt(value: Date) {
		this.CreatedAt = value;
	}

	get getUpdatedAt() {
		return this.UpdatedAt;
	}
	set setUpdatedAt(value: Date) {
		this.UpdatedAt = value;
	}

}

export default Product;
