export const PATH_HOME = {name: 'Home', url:'/shop', hover: '首頁'};

export interface I_Link {
    name: string;
    url: string;
    hover: string;
}
export const LINKS: I_Link[] = [
    // {name: 'Home', url:'/shop', hover: '首頁'},
    {name: 'Login', url:'/shop/login', hover: '登入'},
    //{name: 'Log out', url:'/shop/logout', hover: '登出'},
    {name: 'Member', url:'/shop/member', hover: '會員'},
    {name: 'Products', url:'/shop/products', hover: '商品'},
    {name: 'Wish List', url:'/shop/wishlist', hover: '收藏清單'},
    {name: 'Cart', url:'/shop/cart', hover: '購物車'},
]

export interface I_Slideshow {
    url: string;
    imgSrc: string;
}
export const SLIDESHOWS: I_Slideshow[] = [
    {url: '', imgSrc:'media/pic/banner/1.jpg'},
    {url: '', imgSrc:'media/pic/banner/2.jpg'},
    {url: '', imgSrc:'media/pic/banner/3.jpg'},
    {url: '', imgSrc:'media/pic/banner/4.jpg'},
]

