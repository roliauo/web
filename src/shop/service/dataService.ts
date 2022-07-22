import httpClient from "./httpClient";

const dataService = {
    getConfig(): Promise<any> {
        return httpClient.get('data/shop/config.json');
    },
    getSidebarMenu(): Promise<any> {
        return httpClient.get('data/shop/category.json');
    },
    getProductList(): Promise<any> {
        //return httpClient.get('data/shop/product.json')
        return httpClient.get('https://dummyjson.com/products');
    },
    getProductById(id: number): Promise<any> {
        //return httpClient.get(`data/shop/product/${id}`);
        return httpClient.get(`https://dummyjson.com/products/${id}`);
    },
    searchProduct(search: string): Promise<any> {
        return httpClient.get(`https://dummyjson.com/products/search?q=${search}`);
    },
}

export default dataService;