import axios from 'axios';
import router from '../router';
import { Message } from 'element-ui';

// const BASE_API = 'http://192.168.0.101:9090';//本地
const BASE_API = 'http://47.106.70.5:9595';   //服务器
// 创建 axios 实例
const service = axios.create({
  baseURL: BASE_API, // 请求地址公共部分
  timeout: 15000 ,// 请求超时,
  withCredentials:true
});

// respone 拦截器
service.interceptors.response.use(response => {
  // code 500 -> 登录失败
  if (response.data && response.data.code === 401) {
    router.push({ path: '/' });
    Message.error('您的访问权限已过期，请重新登录');
  }
    return response.data;
  
}, error => {
  Message.error('请求超时，请重试');
  // 错误部分，待处理
  return Promise.reject(error);
});

export default service;