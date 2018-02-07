// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
//import App from './App'
//import router from './router'
//
//Vue.config.productionTip = false
//
///* eslint-disable no-new */
//new Vue({
//el: '#app',
//router,
//template: '<App/>',
//components: { App }
//})
import './assets/css/bootstrap.min.css'
import './assets/css/QGindex.css'
import Vue from 'vue';

import App from './App';
import fHot from './components/common/filmHoting';
import filmDetail from "./components/common/filmDetail"
import first from './components/content/first';
import second from './components/content/second';
import third from './components/content/third';
import fourth from './components/content/fourth';
import fifth from './components/content/fifth';

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes :[
    { path:'/first', component: first },
    { path:'/second', component: second },
    { path:'/third', component: third },
    { path:'/fourth', component: fourth },
    { path:'/fifth', component: fifth },
    { path:'/fHot', component: fHot },
    { path:'/filmDetail/:id',name:'filmDetail',component: filmDetail },
    { path:'/', redirect:'/first' }
  ]
});

new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: {App}
});