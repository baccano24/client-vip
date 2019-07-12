import axios from 'axios';
// Loading动画
import { Message,Loading } from 'element-ui';
import router from '../router/index'


// 定义Loading开始，结束
let loading;
function startLoading(){
    loading=Loading.service({
        lock:true
    });
}
function endLoading(){
    loading.close();
}
// 请求拦截
axios.interceptors.request.use(config =>{
    // 加载动画
    startLoading();

    if(localStorage.eletoken){
        // 设置统一的请求头header
        config.headers.Authorization = localStorage.eletoken;
    }

    return config;
},error =>{
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response =>{
    // 结束加载动画
    endLoading();
    return response;
},error =>{
    // 错误提醒
    endLoading();
    Message.error(error.response.data);

    //获取错误状态码
    const {status}=error.response;
    if(status==401){
        Message.error("token失效，请重新登录！");
        // 清除token
        localStorage.removeItem("eleToken");
        //跳转回登录页面
        router.push('/login');
    }



    return Promise.reject(error);
})


export default axios;