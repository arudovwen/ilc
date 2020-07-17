/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
import { routes } from "./routes";
import { BootstrapVue } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueWaves from 'vue-waves-button';
import Toasted from 'vue-toasted';
 



import "swiper/css/swiper.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-waves-button/waves.css';
import '../sass/app.scss';



Vue.use(VueWaves, {
    name: 'waves' , 
    duration: 500, 
    delay: 200      
  })


  Vue.use(Toasted, {
    duration: 2500,
    icon: null
    // after: true
});
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(require('vue-moment'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        document.getElementById("app").scrollIntoView();
        return null;
    }
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.typeAdmin)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      var admin = localStorage.getItem("typeAdmin");
      if (admin == null) {
        next({
          path: '/admin/auth/login',
          query: { redirect: to.fullPath }
         
        })
      } else {
        next()
      }
    } else {
      next() // make sure to always call next()!
    }
    if (to.matched.some(record => record.meta.typeTutor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        var admin = localStorage.getItem("typeTutor");
        if (admin == null) {
          next({
            path: '/tutor/auth/login',
            query: { redirect: to.fullPath }
           
          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
      if (to.matched.some(record => record.meta.typeStudent)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        var admin = localStorage.getItem("typeStudent");
        if (admin == null) {
          next({
            path: '/student/auth/login',
            query: { redirect: to.fullPath }
           
          })
        } else {
          next()
        }
      } else {
        next() // make sure to always call next()!
      }
  })
const app = new Vue({
    el: "#app",
    router
});
