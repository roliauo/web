import httpClient from "./httpClient";
import { KEY_API } from "../constants";

const dataService = {
    getNews(): Promise<any> {
        return httpClient.get(`https://newsapi.org/v2/top-headlines?country=tw&apiKey=${KEY_API}`)
    },
    getNewsByCountry(country: string): Promise<any> {
        return httpClient.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${KEY_API}`)
    },
    getNewsByCategory(category: string): Promise<any> {
        return httpClient.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${KEY_API}`)
    },
    searchNews(search: string) : Promise<any> {
        return httpClient.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${KEY_API}`)
    },
}

export default dataService;