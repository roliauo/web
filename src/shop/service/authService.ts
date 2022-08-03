/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

const authService = {
    login(params): Promise<any> {
        return httpClient.post('https://dummyjson.com/auth/login', {...params, expiresInMins: 60});
    },
    logout(params): Promise<any> {
        return httpClient.post('https://dummyjson.com/auth/logout', params);
    },
    deleteFacebookAccount(id): Promise<any> {
        return httpClient.get(`https://roliauo.github.io/web/shop/member?delete=${id}`);
    }
}

export default authService;