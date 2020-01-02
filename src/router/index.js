import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const main = r => require.ensure([], () => r(require('@/page/main')), 'main');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const bannerList = r => require.ensure([], () => r(require('@/page/home-set/bannerList')), 'bannerList');
const bannerDetails = r => require.ensure([], () => r(require('@/page/home-set/bannerDetails')), 'bannerDetails');
const goodsList = r => require.ensure([], () => r(require('@/page/goods-manage/goodsList')), 'goodsList');
const goodsDetails = r => require.ensure([], () => r(require('@/page/goods-manage/goodsDetails')), 'goodsDetails');
const brandList = r => require.ensure([], () => r(require('@/page/goods-manage/brandList')), 'brandList');
const brandDetails = r => require.ensure([], () => r(require('@/page/goods-manage/brandDetails')), 'brandDetails');
const orderList = r => require.ensure([], () => r(require('@/page/order-manage/orderList')), 'orderList');
const orderDetails = r => require.ensure([], () => r(require('@/page/order-manage/orderDetails')), 'orderDetails');
const routes = [
  {
    path:'/',
    component:login
  }, 
  {
    path:'/main',
    component:main,
    name:'',
    children: [
      {
        path: '/home',
        component: home,
        meta: [],
      },{
        path: '/bannerList',
        component: bannerList,
        meta: [],
      },{
        path: '/bannerDetails',
        component: bannerDetails,
        meta: [],
      },{
        path: '/goodsList',
        component: goodsList,
        meta: [],
      },{
        path: '/goodsDetails',
        component: goodsDetails,
        meta: [],
      },{
        path:'/brandList',
        component: brandList,
        meta: [],
      },{
        path: '/brandDetails',
        component: brandDetails,
        meta: [],
      },{
        path: '/orderList',
        component: orderList,
        meta: [],
      },{
        path: '/orderDetails',
        component: orderDetails,
        meta: [],
      },
      
    ]
  }
]
export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
