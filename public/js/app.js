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
Vue.use(__webpack_require__(/*! vue-moment */ "./node_modules/vue-moment/dist/vue-moment.js"));
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
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.typeAdmin;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var admin = localStorage.getItem("typeAdmin");

    if (admin == null) {
      next({
        path: '/admin/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }

  if (to.matched.some(function (record) {
    return record.meta.typeTutor;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var admin = localStorage.getItem("typeTutor");

    if (admin == null) {
      next({
        path: '/tutor/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }

  if (to.matched.some(function (record) {
    return record.meta.typeStudent;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    var admin = localStorage.getItem("typeStudent");

    if (admin == null) {
      next({
        path: '/student/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
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


var tutor = JSON.parse(localStorage.getItem('typeTutor'));
var user = JSON.parse(localStorage.getItem('typeStudent'));
window.Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");

if (tutor !== null) {
  window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    broadcaster: 'pusher',
    key: 'fd4918c68dc27458996d',
    cluster: 'mt1',
    auth: {
      headers: {
        Authorization: "Bearer ".concat(tutor.access_token)
      }
    },
    // authEndpoint: '/tutor/auth/broadcasting',
    encrypted: true
  });
}

if (user !== null) {
  window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    broadcaster: 'pusher',
    key: 'fd4918c68dc27458996d',
    cluster: 'mt1',
    auth: {
      headers: {
        Authorization: "Bearer ".concat(user.access_token)
      }
    },
    // authEndpoint: '/api/auth/broadcasting',
    encrypted: true
  });
}

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

var Checkout = function Checkout() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/checkout.vue */ "./resources/js/components/checkout.vue"));
};

var Summary = function Summary() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/summary.vue */ "./resources/js/components/summary.vue"));
};

var Institute = function Institute() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/institute/createInstitute */ "./resources/js/components/institute/createInstitute.vue"));
};

var Data = function Data() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/data */ "./resources/js/components/data.vue"));
};

var AdminHome = function AdminHome() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/home */ "./resources/js/components/admin/home.vue"));
};

var AdminDashboard = function AdminDashboard() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/dashboard */ "./resources/js/components/admin/dashboard.vue"));
};

var AdminAuth = function AdminAuth() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/auth/auth */ "./resources/js/components/admin/auth/auth.vue"));
};

var TutorHome = function TutorHome() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/home */ "./resources/js/components/tutor/home.vue"));
};

var TutorGroups = function TutorGroups() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/groups */ "./resources/js/components/tutor/groups.vue"));
};

var TutorGroupChat = function TutorGroupChat() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/chat */ "./resources/js/components/tutor/chat.vue"));
};

var TutorDashboard = function TutorDashboard() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/dashboard */ "./resources/js/components/tutor/dashboard.vue"));
};

var TutorAuth = function TutorAuth() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/auth/auth */ "./resources/js/components/tutor/auth/auth.vue"));
};

var TutorProfile = function TutorProfile() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/profile */ "./resources/js/components/tutor/profile.vue"));
};

var StudentProfile = function StudentProfile() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/profile */ "./resources/js/components/student/profile.vue"));
};

var AdminTutorCreate = function AdminTutorCreate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/create */ "./resources/js/components/admin/tutor/create.vue"));
};

var AdminTutorUpdate = function AdminTutorUpdate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/update */ "./resources/js/components/admin/tutor/update.vue"));
};

var AdminAdd = function AdminAdd() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/add */ "./resources/js/components/admin/add.vue"));
};

var AdminEdit = function AdminEdit() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/edit */ "./resources/js/components/admin/edit.vue"));
};

var AdminTutorEdit = function AdminTutorEdit() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/edit */ "./resources/js/components/admin/tutor/edit.vue"));
};

var AdminTutorView = function AdminTutorView() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/view */ "./resources/js/components/admin/tutor/view.vue"));
};

var Classes = function Classes() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/classes/home */ "./resources/js/components/admin/classes/home.vue"));
};

var Courses = function Courses() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/courses */ "./resources/js/components/admin/courses.vue"));
};

var Syllabus = function Syllabus() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/syllabus/syllabus */ "./resources/js/components/admin/syllabus/syllabus.vue"));
};

var SyllabusView = function SyllabusView() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/syllabus/view */ "./resources/js/components/admin/syllabus/view.vue"));
};

var SyllabusEdit = function SyllabusEdit() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/syllabus/edit */ "./resources/js/components/admin/syllabus/edit.vue"));
};

var SyllabusHome = function SyllabusHome() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/syllabus/home */ "./resources/js/components/admin/syllabus/home.vue"));
};

var TimeTable = function TimeTable() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/timeTable/timeTable */ "./resources/js/components/admin/timeTable/timeTable.vue"));
};

var TimeTableHome = function TimeTableHome() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/timeTable/home */ "./resources/js/components/admin/timeTable/home.vue"));
};

var ViewTimeTable = function ViewTimeTable() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/timeTable/view */ "./resources/js/components/admin/timeTable/view.vue"));
};

var StudentAuth = function StudentAuth() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/auth/auth */ "./resources/js/components/student/auth/auth.vue"));
};

var StudentHome = function StudentHome() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/home */ "./resources/js/components/student/home.vue"));
};

var StudentDashboard = function StudentDashboard() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/dashboard */ "./resources/js/components/student/dashboard.vue"));
};

var StudentGroups = function StudentGroups() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/groups */ "./resources/js/components/student/groups.vue"));
};

var StudentGroupChat = function StudentGroupChat() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/chat */ "./resources/js/components/student/chat.vue"));
};

var AdminStudentCreate = function AdminStudentCreate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/create */ "./resources/js/components/admin/student/create.vue"));
};

var AdminStudentUpdate = function AdminStudentUpdate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/update */ "./resources/js/components/admin/student/update.vue"));
};

var AdminStudentEdit = function AdminStudentEdit() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/edit */ "./resources/js/components/admin/student/edit.vue"));
};

var AdminStudentView = function AdminStudentView() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/view */ "./resources/js/components/admin/student/view.vue"));
};

var Administrators = function Administrators() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/adminUsers */ "./resources/js/components/admin/adminUsers.vue"));
};

var Students = function Students() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/home */ "./resources/js/components/admin/student/home.vue"));
};

var StudentUpdate = function StudentUpdate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/student/update */ "./resources/js/components/student/update.vue"));
};

var Tutors = function Tutors() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/home */ "./resources/js/components/admin/tutor/home.vue"));
};

var TutorUpdate = function TutorUpdate() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/tutor/update */ "./resources/js/components/tutor/update.vue"));
};

var AssignTutor = function AssignTutor() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/assign */ "./resources/js/components/admin/tutor/assign.vue"));
};

var AssignStudent = function AssignStudent() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/student/assign */ "./resources/js/components/admin/student/assign.vue"));
};

var AssignHead = function AssignHead() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/admin/tutor/assignHead */ "./resources/js/components/admin/tutor/assignHead.vue"));
};

var SchoolRegister = function SchoolRegister() {
  return Promise.all(/*! import() | home_routes */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("home_routes")]).then(__webpack_require__.bind(null, /*! ./components/school/register */ "./resources/js/components/school/register.vue"));
};

var routes = [{
  path: "*",
  redirect: "/"
}, {
  path: "/",
  component: Home,
  name: "Home",
  children: []
}, {
  path: "/auth",
  component: Auth,
  name: "Auth",
  beforeEnter: function beforeEnter(to, from, next) {
    var user = localStorage.getItem("myUser");

    if (user == null) {
      next();
    } else {
      next("/");
    }
  }
}, {
  path: "/create/institute",
  component: Institute,
  name: "Institute"
}, {
  path: "/summary",
  component: Summary,
  name: "Summary"
}, {
  path: "/checkout",
  component: Checkout,
  name: "Checkout"
}, {
  path: "/data",
  component: Data,
  name: "Data"
}, {
  path: "/school/register",
  component: SchoolRegister,
  name: "SchoolRegister"
}, {
  path: "/admin/auth/:type",
  component: AdminAuth,
  name: "AdminAuth",
  beforeEnter: function beforeEnter(to, from, next) {
    var admin = JSON.parse(localStorage.getItem("typeAdmin"));

    if (admin == null) {
      next();
    } else {
      next({
        name: "AdminDashboard"
      });
    }
  }
}, {
  path: "/admin",
  component: AdminDashboard,
  children: [{
    path: "",
    name: "AdminHome",
    component: AdminHome,
    meta: {
      typeAdmin: true
    }
  }, {
    path: "add",
    name: "AdminAdd",
    component: AdminAdd,
    meta: {
      typeAdmin: true
    }
  }, {
    path: "edit/:id",
    name: "AdminEdit",
    component: AdminEdit,
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutor/edit/:id",
    component: AdminTutorEdit,
    name: "AdminTutorEdit",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutor/create",
    component: AdminTutorCreate,
    name: "AdminTutorCreate",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutor/view/:id",
    component: AdminTutorView,
    name: "AdminTutorView",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "student/edit/:id",
    component: AdminStudentEdit,
    name: "AdminStudentEdit",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "student/create",
    component: AdminStudentCreate,
    name: "AdminStudentCreate",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "student/view/:id",
    component: AdminStudentView,
    name: "AdminStudentView",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "administrators",
    component: Administrators,
    name: "Administrators",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "students",
    component: Students,
    name: "Students",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutors",
    component: Tutors,
    name: "Tutors",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "courses",
    component: Courses,
    name: "Courses",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "syllabus",
    component: Syllabus,
    name: "Syllabus",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "syllabus/view/:id",
    component: SyllabusView,
    name: "SyllabusView",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "syllabus/edit/:id",
    component: SyllabusEdit,
    name: "SyllabusEdit",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "time-table",
    component: TimeTable,
    name: "TimeTable",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "syllabus/home",
    component: SyllabusHome,
    name: "SyllabusHome",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "time-table/home",
    component: TimeTableHome,
    name: "TimeTableHome",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "time-table/view/:id",
    component: ViewTimeTable,
    name: "ViewTimeTable",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "classes/years",
    component: Classes,
    name: "Classes",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutor/assign",
    component: AssignTutor,
    name: "AssignTutor",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "student/assign",
    component: AssignStudent,
    name: "AssignStudent",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "student/update/:id",
    component: AdminStudentUpdate,
    name: "AdminStudentUpdate",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "tutor/update/:id",
    component: AdminTutorUpdate,
    name: "AdminTutorUpdate",
    meta: {
      typeAdmin: true
    }
  }, {
    path: "head/assign",
    component: AssignHead,
    name: "AssignHead",
    meta: {
      typeAdmin: true
    }
  }]
}, {
  path: "/tutor/auth/:type",
  component: TutorAuth,
  name: "TutorAuth",
  beforeEnter: function beforeEnter(to, from, next) {
    var tutor = JSON.parse(localStorage.getItem("typeTutor"));

    if (tutor == null) {
      next();
    } else {
      next({
        name: "TutorDashboard"
      });
    }
  }
}, {
  path: "/tutor",
  component: TutorDashboard,
  children: [{
    path: "",
    component: TutorHome,
    name: "TutorHome",
    meta: {
      typeTutor: true
    }
  }, {
    path: "update",
    component: TutorUpdate,
    name: "TutorUpdate",
    meta: {
      typeTutor: true
    }
  }, {
    path: "profile",
    component: TutorProfile,
    name: "TutorProfile",
    meta: {
      typeTutor: true
    }
  }, {
    path: "groups",
    component: TutorGroups,
    name: "TutorGroups",
    meta: {
      typeTutor: true
    }
  }, {
    path: "group/:id",
    component: TutorGroupChat,
    name: "TutorGroupChat",
    meta: {
      typeTutor: true
    }
  }]
}, {
  path: "/student/auth/:type",
  component: StudentAuth,
  name: "StudentAuth",
  beforeEnter: function beforeEnter(to, from, next) {
    var student = JSON.parse(localStorage.getItem("typeStudent"));

    if (student == null) {
      next();
    } else {
      next({
        name: "StudentDashboard"
      });
    }
  }
}, {
  path: "/student",
  component: StudentDashboard,
  children: [{
    path: "",
    component: StudentHome,
    name: "StudentHome",
    meta: {
      typeStudent: true
    }
  }, {
    path: "update",
    component: StudentUpdate,
    name: "StudentUpdate",
    meta: {
      typeStudent: true
    }
  }, {
    path: "profile",
    component: StudentProfile,
    name: "StudentProfile",
    meta: {
      typeStudent: true
    }
  }, {
    path: "groups",
    component: StudentGroups,
    name: "StudentGroups",
    meta: {
      typeStudent: true
    }
  }, {
    path: "group/:id",
    component: StudentGroupChat,
    name: "StudentGroupChat",
    meta: {
      typeStudent: true
    }
  }]
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

__webpack_require__(/*! C:\Users\User\Documents\coeur\ilc\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\User\Documents\coeur\ilc\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);