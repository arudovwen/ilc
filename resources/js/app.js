/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
import { routes } from "./routes";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import VueWaves from "vue-waves-button";
import Toasted from "vue-toasted";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

import VueChatScroll from "vue-chat-scroll";
import VCalendar from "v-calendar";

import "swiper/css/swiper.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-waves-button/waves.css";
import "../sass/app.scss";

Vue.filter("time", function(num) {
    let secs = String(Math.floor(num % 60)).padStart(2, "0");
    let mins = String(Math.floor(num / 60)).padStart(2, "0");
    let hours = String(Math.floor(num / 3600)).padStart(2, "0");

    if (hours === "00") {
        return mins + "m" + " : " + secs + "s";
    } else {
        return hours + "hr" + " :" + mins + "m" + " : " + secs + "s";
    }
});
Vue.filter("timeStatus", function(num) {
    let today = Date.parse(new Date());
    let d = Date.parse(num);
    if (d < today) {
        return "Expired";
    } else {
        return "Ongoing";
    }
});
Vue.filter('currency', function (num) {
  if (num !== null) {
    return (
      "\u20A6" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    );
} else {
    return "NGN 0.00";
}
})


Vue.filter("format", function(time) {
    // Check correct time format and split into components
    time = time
        .toString()
        .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
        // If time format correct

        time = time.slice(1); // Remove full string match value
        time[3] = " ";
        time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }

    return time.join(""); // return adjusted time or original string
});

Vue.filter("seconds", function(hms) {
    var a = hms.split(":"); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    return seconds;
});

import VueCountdownTimer from 'vuejs-countdown-timer'
Vue.use(VueCountdownTimer)

Vue.use(VueChatScroll);

Vue.use(VueWaves, {
    name: "waves",
    duration: 500,
    delay: 200
});

Vue.use(Toasted, {
    duration: 3500,
    iconPack: "fontawesome",
    action: {
        text: "Cancel",
        onClick: (e, toastObject) => {
            toastObject.goAway(0);
        }
    }
});
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.use(require("vue-moment"));
Vue.use(Chartkick.use(Chart));
Vue.use(VCalendar, {
    componentPrefix: "vc" // Use <vc-calendar /> instead of <v-calendar />
    // ...other defaults
});
// Vue.component('calendar', Calendar)

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
                path: "/admin/auth/login",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
    if (to.matched.some(record => record.meta.typeTutor)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        var admin = localStorage.getItem("typeTutor");
        if (admin == null) {
            next({
                path: "/auth",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
    if (to.matched.some(record => record.meta.typeStudent)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        var admin = localStorage.getItem("typeStudent");
        if (admin == null) {
            next({
                path: "/auth",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});
const app = new Vue({
    el: "#app",
    router
});
