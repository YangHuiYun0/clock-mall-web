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
      }
    ]
  }
]
export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
