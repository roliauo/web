export const LOCAL_URL = "http://192.168.50.48:8000/";
export const KEY_API = "f1f35a9379e143c1aa20a856a56c9352";

export const NODE_ENV = {
    development: "development",
    production: "production"
}

export interface I_NavLinks {
    name: string;
    url: string;
    icon: string;
    // iconClassName?: string; // "material-icons"
}

//export const DEFAULT_NEWS =
export const NAV_LINKS: I_NavLinks[] = [
    {name: "熱門報導", url:"/", icon: "home"},
    {name: "台灣", url:"tw", icon: "web"},
    {name: "中國", url:"cn", icon: "web"},
    {name: "全球", url:"general", icon: "public"},
    {name: "娛樂", url:"entertainment", icon: "video_library"},
    {name: "商業", url:"business", icon: "account_balance"},
    {name: "運動", url:"sports", icon: "directions_run"},
    {name: "科技", url:"technology", icon: "build"},
]