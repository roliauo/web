/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpClient";

interface I_CartNew {
    userId: number;
    products: {
        id: number;
        quantity: number;
      }[];
}

interface I_CartUpdate {
    cartId: number
    products: {
        id: number;
        quantity: number;
      }[];
}

const cartService = {
    getACart(userId: number): Promise<any> {
        return httpClient.get(`https://dummyjson.com/carts/user/${userId}`);
    },
    addANewCart(params: I_CartNew): Promise<any> {
        return httpClient.post(`https://dummyjson.com/carts/add`, params);
    },
    updateACart(params: I_CartUpdate): Promise<any> {
        return httpClient.put(`https://dummyjson.com/carts/${params.cartId}`, {...params.products});
    },
}

export default cartService;