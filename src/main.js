import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';//引入路由
import 'animate.css';//引入动画做为全局使用
Vue.use(VueRouter);//使用路由


 import './assets/css/base.css';//全局css
 import './assets/js/font.js';/*全局js*/

import routes from './router.config.js';//引入路由文件集，全部路由定义注册

import axios from 'axios';//使用axios获取数据
Vue.prototype.$http=axios;//将vue身上的$http定义为axios，方便使用

import filters from './filters/index.js'//引入过滤器
console.log(Object.keys(filters))
//将过滤器中每一个过滤器取出来放到全局中使用
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

import loading from './loading/index.js';//引入加载模式
Vue.use(loading)//使用加载


console.log(routes);

import store from './store/index.js';//引入状态管理

var router=new VueRouter({routes,
mode:'history'});
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
