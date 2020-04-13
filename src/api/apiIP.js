//获取当前的URL中的地址，同时携带端口号,不携带http://
let projectAddrass = window.location.host;  //"localhost:8888"
let projectAddrassNoPort = window.location.hostname;//"localhost"
//返回当前的URL协议,既http协议还是https协议
let protocol = document.location.protocol; //"http:"
//封装请求接口的地址,如果服务器中套了一层性项目名称，需要在这里面添加上,需要留意，例如: /zzxl/
export const interfaceIp = `${protocol}//${projectAddrass}/zzxl`; //http://localhost:8888/zzxl/index/captcha
//LOGO图片的请求地址
export const logoImgAddress = `${protocol}//${projectAddrassNoPort}`; //http://localhost/zzxl/index/captcha
//对外提供的服务地址
export const publicIp = process.env.NODE_ENV === 'development' ? 'http://218.29.159.12:8081' : interfaceIp;
export const logoImgIp = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1' : logoImgAddress;
