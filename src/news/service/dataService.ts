import httpClient from "./httpClient";
import { KEY_API, NODE_ENV } from "../constants";

const localhostAPI = {
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

const JSONAPI = {
    getNews(): Promise<any> {
        return httpClient.get(`data/news/tw.json`)
    },
    getNewsByCountry(country: string): Promise<any> {
        return httpClient.get(`data/news/${country}.json`)
    },
    getNewsByCategory(category: string): Promise<any> {
        return httpClient.get(`data/news/${category}.json`)
    },
    searchNews(search: string) : Promise<any> {
        return httpClient.get(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${KEY_API}`)
    },
}

const dataService = process.env.NODE_ENV === NODE_ENV.development ? localhostAPI : JSONAPI;

export default dataService;