/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {LOCAL_URL, BASE_URL} from '../constants';

class HttpClient { //implements IHttpClient
    private _http: AxiosInstance;

    constructor() {
        this._http = axios.create({
            baseURL: process.env.NODE_ENV === 'development' ? LOCAL_URL : BASE_URL,
            timeout: 1800000,
            // headers: {
            //     Authorization: `Bearer ${tools.getCookie('access_token')}`,
            // },
        });
    }
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this._http.get(url, config);
        return response.data;
    }
    public async post<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this._http.post(url, params, config);
        return response.data;
    }
    public async put<T>(url: string, params: any, config?: AxiosRequestConfig): Promise<T> {
        const response = await this._http.put(url, params, config);
        return response.data;
    }
    public async delete(url: string, params?: any): Promise<any> {
        const response = await this._http.delete(url, { data: params });
        return response;
    }
}

const httpClient = new HttpClient();

export default httpClient;
