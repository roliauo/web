export const BASE_URL = "https://roliauo.github.io/web/";
export const LOCAL_URL = "http://192.168.50.48:8000/";

export const PATH_HOME = {name: 'Home', url:'/', hover: '首頁'};

export interface I_NAV_LINKS {
    name: string;
    url: string;
    hover: string;
    icon?: string;
    iconClassName?: string;
}

export const NAV_LINKS: I_NAV_LINKS[] = [
    // {name: "Search", url:"/search", hover: "搜尋", iconClassName: "material-icons", icon: "search"},
    //{name: "Login", url:"/login", hover: "登入"},
    //{name: "Log out", url:"/shop/logout", hover: "登出"},
    {name: "Member", url:"/member", hover: "會員", iconClassName: "material-icons", icon: "person_outline"},
    //{name: "Products", url:"/products", hover: "商品"},
    {name: "Wish List", url:"/wishlist", hover: "收藏清單", iconClassName: "material-icons", icon: "favorite_border"},
    {name: "Cart", url:"/cart", hover: "購物車", iconClassName: "material-icons", icon: "shopping_cart"},
]

export interface I_Slideshow {
    url: string;
    imgSrc: string;
}

export const SLIDESHOWS_BANNER_URL: I_Slideshow[] = [
    {url: '/products', imgSrc:`${BASE_URL}media/shop/pic/banner/1.png`},
    {url: '/products', imgSrc:`${BASE_URL}media/shop/pic/banner/2.png`},
    {url: '/products', imgSrc:`${BASE_URL}media/shop/pic/banner/3.png`},
    {url: '/products', imgSrc:`${BASE_URL}media/shop/pic/banner/4.png`},
]

