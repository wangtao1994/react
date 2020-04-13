import axios from 'axios';
import * as apiUrl from './apiurl';
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';

const key = 'keepOnlyOne';

/**
 *  接口请求数据时执行的方法
 *  接受参数为请求的路径apiUrl、请求接口配置参数configObj
 *
 * @param {String} apiUrl            用户传入的请求路径
 * @param {Object} configObj        用户传入的接口参数
 */
function getDataFromServer(apiUrl, configObj) {
    //用户传入的接口配置参数
    let {
        method = 'GET',
        params = {},
        data = {},
        timeout = 1000
    } = configObj;
    /**
     * 返回的Promise对象含有then、catch方法
     */
    return new Promise(function (resolve, reject) {
        axios({
            url: apiUrl,
            method: method,
            params: params,
            data: data,
            timeout: timeout,
            headers: {
                'Content-Type': 'application/json',
                'token': window.sessionStorage.getItem('token') || ''
            }
        }).then(function (response) {
            if(response){
                if (response.data && response.data.code) {
                    resolve(response);
                }else {
                    /*notification.error({
                        key,
                        message: '操作失败',
                        description: '返回的数据格式有误'
                    });*/
                   Toast.success('返回的数据格式有误', 1);
                    resolve(response);
                }
            }else {
                //处理特殊的情况就是response返回什么也没有
                /*notification.error({
                    key,
                    message: '操作失败',
                    description: '服务器错误'
                });*/
               Toast.success('服务器错误', 1);
                resolve(response);
            }
        }).catch(function (error) {
            /*notification.error({
                key,
                message: '操作失败',
                description: '网络异常,请稍后重试'
            });*/
           Toast.success('网络异常,请稍后重试', 1);
            reject(error);
        })
    })
}


// 登录
export function loginClick(configObj) {
    return getDataFromServer(apiUrl.LOGIN, configObj);
}
