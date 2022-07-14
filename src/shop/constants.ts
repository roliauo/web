export const BASE_URL = "https://roliauo.github.io/web/";
export const LOCAL_URL = "http://192.168.50.48:8000/";

export const PATH_HOME = {name: 'Home', url:'/', hover: '首頁'};

export interface I_Link {
    name: string;
    url: string;
    hover: string;
}

export const LINKS: I_Link[] = [
    {name: 'Login', url:'/login', hover: '登入'},
    //{name: 'Log out', url:'/shop/logout', hover: '登出'},
    {name: 'Member', url:'/member', hover: '會員'},
    {name: 'Products', url:'/products', hover: '商品'},
    {name: 'Wish List', url:'/wishlist', hover: '收藏清單'},
    {name: 'Cart', url:'/cart', hover: '購物車'},
]

export interface I_Slideshow {
    url: string;
    imgSrc: string;
}

export const SLIDESHOWS_BANNER_URL: I_Slideshow[] = [
    {url: '', imgSrc:`${BASE_URL}media/shop/pic/banner/1.jpg`},
    {url: '', imgSrc:`${BASE_URL}media/shop/pic/banner/2.jpg`},
    {url: '', imgSrc:`${BASE_URL}media/shop/pic/banner/3.jpg`},
    {url: '', imgSrc:`${BASE_URL}media/shop/pic/banner/4.jpg`},
]

