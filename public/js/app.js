(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./resources/js/routes.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_waves_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-waves-button */ "./node_modules/vue-waves-button/index.js");
/* harmony import */ var vue_waves_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_waves_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-toasted */ "./node_modules/vue-toasted/dist/vue-toasted.min.js");
/* harmony import */ var vue_toasted__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_toasted__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/swiper.css */ "./node_modules/swiper/css/swiper.css");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_waves_button_waves_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-waves-button/waves.css */ "./node_modules/vue-waves-button/waves.css");
/* harmony import */ var vue_waves_button_waves_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_waves_button_waves_css__WEBPACK_IMPORTED_MODULE_9__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");










Vue.use(vue_waves_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
  name: 'waves',
  duration: 500,
  delay: 200
});
Vue.use(vue_toasted__WEBPACK_IMPORTED_MODULE_5___default.a, {
  duration: 2500,
  icon: null // after: true

});
Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);
Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BootstrapVue"]);
Vue.use(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default.a
/* { default options with global component } */
);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: "history",
  routes: _routes__WEBPACK_IMPORTED_MODULE_1__["routes"],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    document.getElementById("app").scrollIntoView();
    return null;
  }
});
var app = new Vue({
  el: "#app",
  router: router
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/routes.js":
/*!********************************!*\
  !*** ./resources/js/routes.js ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
var Home = function Home() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/index.vue */ "./resources/js/components/index.vue"));
};

var Auth = function Auth() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/auth/auth.vue */ "./resources/js/components/auth/auth.vue"));
};

var Institute = function Institute() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/institute/createInstitute */ "./resources/js/components/institute/createInstitute.vue"));
};

x;
var routes = [{
  path: "*",
  redirect: "/"
}, {
  path: "/",
  component: Home,
  name: 'Home',
  children: []
}, {
  path: '/auth',
  component: Auth,
  name: 'Auth',
  beforeEnter: function beforeEnter(to, from, next) {
    var user = localStorage.getItem('authUser');

    if (user == null) {
      next();
    } else {
      next('/');
    }
  }
}, {
  path: '/create/institute',
  component: Institute,
  name: 'Institute'
}];

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ARUDOVWEN/Desktop/ilc/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/ARUDOVWEN/Desktop/ilc/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);