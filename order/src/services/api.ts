import { apiEnvConfig } from "@/config/apiConfig.js";
import axios, { type AxiosInstance } from "axios";

class ProductAPI {

    private readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: apiEnvConfig.apiMenu
        });
    }

    async getProductById(productId: string) {
        const res = await this.api.get(`/api/v1/products/${productId}`);

        return res.data;
    }

    async getProductByName(productName: string) {
        const res = await this.api.get(
            `/api/v1/products/name/${productName}`
        );

        return res.data;
    }

    async getProducts() {
        const res = await this.api.get(
            "/api/v1/products"
        );

        return res.data;
    }
};


export default {
    productApi: new ProductAPI()
}