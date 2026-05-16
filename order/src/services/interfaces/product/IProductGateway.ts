import type { ProductDTO } from "@services/interfaces/product/ProductDTO.js";

export interface IProductGateway {
    getProductById(product: string): Promise<ProductDTO>;
    getProductByName(name: string): Promise<ProductDTO[]>;
    getProducts(): Promise<ProductDTO[]>;
};