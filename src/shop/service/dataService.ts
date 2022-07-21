import httpClient from "./httpClient";

const dataService = {
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
}

export default dataService;