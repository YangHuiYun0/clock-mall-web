import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const main = r => require.ensure([], () => r(require('@/page/main')), 'main');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const bannerList = r => require.ensure([], () => r(require('@/page/home-set/bannerList')), 'bannerList');
const bannerDetails = r => require.ensure([], () => r(require('@/page/home-set/bannerDetails')), 'bannerDetails');

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
      }
    ]
  }
]
export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
