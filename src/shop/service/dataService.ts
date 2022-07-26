/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

export interface I_ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
interface I_ProductList {
    products: I_ProductItem[];
    total: number;
    skip: number;
    limit: number;
}

const dataService = {
    getConfig(): Promise<any> {
        return httpClient.get('data/shop/config.json');
    },
    getSidebarMenu(): Promise<any> {
        return httpClient.get('data/shop/category.json');
    },
    getCategories(): Promise<string[]> {
        return httpClient.get('https://dummyjson.com/products/categories');
    },
    getProductList(params?: string): Promise<I_ProductList> {
        //return httpClient.get('data/shop/product.json')
        return httpClient.get(`https://dummyjson.com/products${params}`);
    },
    getProductById(id: number): Promise<any> {
        //return httpClient.get(`data/shop/product/${id}`);
        return httpClient.get(`https://dummyjson.com/products/${id}`);
    },
    searchProduct(search: string): Promise<any> {
        return httpClient.get(`https://dummyjson.com/products/search?q=${search}`);
    },
    getProductListByCategory(category: string|number, params?: string) : Promise<I_ProductList> {
        return httpClient.get(`https://dummyjson.com/products/category/${category}${params}`);
    },
}

export default dataService;