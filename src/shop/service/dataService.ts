import httpClient from "./httpClient";

const dataService = {
    getSidebarMenu(): Promise<any> {
        return httpClient.get('data/shop/category.json')
    },
    getProducts(): Promise<any> {
        return httpClient.get('data/shop/product.json')
    }
}

export default dataService;