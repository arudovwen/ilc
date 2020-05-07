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



import "swiper/css/swiper.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'vue-waves-button/waves.css';



Vue.use(VueWaves, {
    name: 'waves' , 
    duration: 500, 
    delay: 200      
  })



Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

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

const app = new Vue({
    el: "#app",
    router
});
