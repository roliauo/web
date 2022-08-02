/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

const authService = {
    login(params): Promise<any> {
        return httpClient.post('https://dummyjson.com/auth/login', {...params, expiresInMins: 60});
    },
    logout(params): Promise<any> {
        return httpClient.post('https://dummyjson.com/auth/logout', params);
    }
}

export default authService;