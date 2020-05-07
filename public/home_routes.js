(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/auth.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./resources/js/components/auth/login.vue");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration */ "./resources/js/components/auth/registration.vue");
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      login: false,
      registration: true
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      if (vm.$route.query.authType === "login") {
        vm.switchAuth("login");
        next();
      } else {
        vm.switchAuth("register");
        next();
      }
    });
  },
  components: {
    registration: _registration__WEBPACK_IMPORTED_MODULE_1__["default"],
    login: _login__WEBPACK_IMPORTED_MODULE_0__["default"],
    navigation: _navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  watch: {
    "$route.query.authType": {
      handler: function handler(newValue, oldValue) {
        this.switchAuth(newValue);
      }
    }
  },
  methods: {
    switchAuth: function switchAuth(value) {
      switch (value) {
        case "login":
          this.login = true;
          this.registration = false;
          break;

        case "register":
          this.login = false;
          this.registration = true;
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        type: "tutor",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    register: function register(value) {
      this.$emit("register", value);
    },
    changeType: function changeType(value) {
      this.user.type = value;
    },
    submit: function submit() {
      var data = {
        grant_type: "password",
        client_id: 3,
        client_secret: "Vq7JaoAeblyt4aHnpJjw4E3YmmkkFe1Q1PnxiQY7",
        username: this.user.email,
        password: this.user.password,
        theNewProvider: 'api'
      };
      axios.post("/oauth/token", data).then(function (res) {
        axios.get("/api/user", {
          headers: {
            Authorization: "Bearer ".concat(res.data.access_token)
          }
        }).then(function (res) {})["catch"](function (error) {
          var errors = error.response.data.errors;
          console.log("submit -> errors", error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/registration.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        type: "student",
        student: {
          name: "",
          password: "",
          email: "",
          phone: "",
          gender: "",
          mat_no: "",
          level_of_edu: "",
          school: "",
          faculty: "",
          department: "",
          course_level: ""
        },
        tutor: {
          name: "",
          password: "",
          email: "",
          phone: "",
          gender: "",
          id_no: "",
          level_of_edu: "",
          school: "",
          faculty: "",
          department: "",
          course_level: ""
        }
      }
    };
  },
  methods: {
    login: function login(value) {
      this.$emit("login", value);
    },
    changeType: function changeType(value) {
      this.user.type = value;
    },
    submit: function submit() {
      axios.post('/api/register', this.user.student).then(function (response) {
        console.log("submit -> response", response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/banner.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation/navigation */ "./resources/js/components/navigation/navigation.vue");
/* harmony import */ var _home_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/banner */ "./resources/js/components/home/banner.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'app-navigation': _navigation_navigation__WEBPACK_IMPORTED_MODULE_0__["default"],
    'app-banner': _home_banner__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      auth: false,
      name: "Success"
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main[data-v-2557a474] {\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  height: 100vh;\n}\n.login[data-v-2557a474] {\n}\n.register[data-v-2557a474] {\n  padding-top: 3%;\n}\n.mini_box_1[data-v-2557a474],\n.mini_box_2[data-v-2557a474] {\n  width: 200px;\n  height: 100px;\n  position: absolute;\n}\n.mini_box_1[data-v-2557a474] {\n  background: yellow;\n  top: -6%;\n  right: -6%;\n  transform: rotate(45deg);\n}\n.mini_box_2[data-v-2557a474] {\n  background: #333333;\n  bottom: -6%;\n  left: -6%;\n  transform: rotate(45deg);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-6aa0b866] {\n  background: transparent;\n  padding: 3%;\n}\n.register-left[data-v-6aa0b866] {\n  text-align: center;\n  color: #fff;\n  padding-top: 4%;\n}\n.register-left input[data-v-6aa0b866] {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  width: 60%;\n  background: #f7f8fa;\n  font-weight: bold;\n  color: #383d41;\n  margin-top: 30%;\n  margin-bottom: 3%;\n  cursor: pointer;\n}\n.register-right[data-v-6aa0b866] {\n  background: #f7f8fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n}\n.register-left img[data-v-6aa0b866] {\n  margin-top: 15%;\n  margin-bottom: 5%;\n  width: 25%;\n  -webkit-animation: mover-data-v-6aa0b866 2s infinite alternate;\n  animation: mover-data-v-6aa0b866 1s infinite alternate;\n}\n@-webkit-keyframes mover-data-v-6aa0b866 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-20px);\n}\n}\n@keyframes mover-data-v-6aa0b866 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-20px);\n}\n}\n.register-left p[data-v-6aa0b866] {\n  font-weight: lighter;\n  padding: 12%;\n  margin-top: -9%;\n}\n.register .register-form[data-v-6aa0b866] {\n  padding: 10%;\n  margin-top: 10%;\n}\n.btnRegister[data-v-6aa0b866] {\n  float: right;\n  margin-top: 10%;\n  border: none;\n  border-radius: 1.5rem;\n  padding: 4%;\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  color: #fff;\n  font-weight: 600;\n  width: 50%;\n  cursor: pointer;\n}\n.register .nav-tabs[data-v-6aa0b866] {\n  margin-top: 3%;\n  border: none;\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  border-radius: 1.5rem;\n  width: 20%;\n  float: right;\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-6aa0b866] {\n  padding: 2%;\n  height: 34px;\n  font-weight: 600;\n  color: #fff;\n  border-top-right-radius: 1.5rem;\n  border-bottom-right-radius: 1.5rem;\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-6aa0b866]:hover {\n  border: none;\n}\n.register .nav-tabs .nav-link.active[data-v-6aa0b866] {\n  width: 100px;\n  color: #5fa1ac;\n  border: 2px solid #5fa1ac;\n  border-top-left-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n.register-heading[data-v-6aa0b866] {\n  text-align: center;\n  margin-top: 8%;\n  margin-bottom: -15%;\n  color: #495057;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.register[data-v-0a4369f6] {\n  background: transparent;\n  padding: 3%;\n}\n.register-left[data-v-0a4369f6] {\n  text-align: center;\n  color: #fff;\n  padding-top: 4%;\n}\n.register-left input[data-v-0a4369f6] {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  width: 60%;\n  background: #f7f8fa;\n  font-weight: bold;\n  color: #383d41;\n  margin-top: 30%;\n  margin-bottom: 3%;\n  cursor: pointer;\n}\n.register-right[data-v-0a4369f6] {\n  background: #f7f8fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n}\n.register-left img[data-v-0a4369f6] {\n  margin-top: 15%;\n  margin-bottom: 5%;\n  width: 25%;\n  -webkit-animation: mover-data-v-0a4369f6 2s infinite alternate;\n  animation: mover-data-v-0a4369f6 1s infinite alternate;\n}\n@-webkit-keyframes mover-data-v-0a4369f6 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-20px);\n}\n}\n@keyframes mover-data-v-0a4369f6 {\n0% {\n    transform: translateY(0);\n}\n100% {\n    transform: translateY(-20px);\n}\n}\n.register-left p[data-v-0a4369f6] {\n  font-weight: lighter;\n  padding: 12%;\n  margin-top: -9%;\n}\n.register .register-form[data-v-0a4369f6] {\n  padding: 10%;\n  margin-top: 10%;\n}\n.btnRegister[data-v-0a4369f6] {\n  float: right;\n  margin-top: 10%;\n  border: none;\n  border-radius: 1.5rem;\n  padding: 4%;\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  color: #fff;\n  font-weight: 600;\n  width: 50%;\n  cursor: pointer;\n}\n.register .nav-tabs[data-v-0a4369f6] {\n  margin-top: 3%;\n  border: none;\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  border-radius: 1.5rem;\n  width: 20%;\n  float: right;\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-0a4369f6] {\n  padding: 2%;\n  height: 34px;\n  font-weight: 600;\n  color: #fff;\n  border-top-right-radius: 1.5rem;\n  border-bottom-right-radius: 1.5rem;\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-0a4369f6]:hover {\n  border: none;\n}\n.register .nav-tabs .nav-link.active[data-v-0a4369f6] {\n  width: 100px;\n  color: #5fa1ac;\n  border: 2px solid #5fa1ac;\n  border-top-left-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n.register-heading[data-v-0a4369f6] {\n  text-align: center;\n  margin-top: 8%;\n  margin-bottom: -15%;\n  color: #495057;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main_container[data-v-45b4b761] {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  background: repeating-linear-gradient(\n    to right,\n    rgb(15, 122, 138, 0.7) 0%,\n    rgb(15, 122, 138, 0.7) 100%\n  );\n  overflow: hidden;\n}\n.square[data-v-45b4b761] {\n  width: 60%;\n  height: 100%;\n  position: relative;\n  z-index: 4;\n  overflow: hidden;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.square_text[data-v-45b4b761]{\n    color: white;\n    width: 100%;\n    min-height: 50%;\n    display: grid;\n    justify-content: flex-start;\n    align-items: center;\n    padding-left: 50px;\n}\n.main_text[data-v-45b4b761]{\n    font-weight: 700;\n    font-size: 60px;\n    color: #333333;\n}\n.sub_text[data-v-45b4b761]{\n    color:white;\n    font-size: 24px;\n     font-weight: 700;\n     display: flex;\n     align-items: center;\n}\n.mini_square_1[data-v-45b4b761],\n.mini_square_2[data-v-45b4b761] {\n  width: 150px;\n  height: 250px;\n  background: yellow;\n  position: absolute;\n  transform: rotate(-45deg);\n}\n.mini_square_1[data-v-45b4b761] {\n  top: 0;\n  right: 0;\n  top: -95px;\n  right: -50px;\n}\n.mini_square_2[data-v-45b4b761] {\n  bottom: -95px;\n  left: -50px;\n}\n.circle_1[data-v-45b4b761],\n.circle_2[data-v-45b4b761] {\n  width: 500px;\n  height: 500px;\n  position: absolute;\n  right: 20%;\n  border: 6px solid white;\n  overflow: hidden;\n}\n.circle_3[data-v-45b4b761] {\n  width: 600px;\n  height: 600px;\n  background: white;\n  position: absolute;\n  right: -10%;\n  top: 50%;\n  margin-top: -300px;\n  z-index: 2;\n  border: 6px solid white;\n  overflow: hidden;\n}\n.rounded_circle img[data-v-45b4b761]{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.circle_1[data-v-45b4b761] {\n  background: orange;\n  top: -5%;\n  z-index: 1;\n}\n.circle_2[data-v-45b4b761] {\n  background: green;\n  bottom: -5%;\n  z-index: 3;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.main[data-v-2ac2c897]{\n    position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#navigation[data-v-370c6798] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n  z-index: 5;\n}\n.logo[data-v-370c6798] {\n}\nul[data-v-370c6798]{\n  position: relative;\n}\n.nav[data-v-370c6798] {\n  padding: 10px;\n}\n.nav ul li[data-v-370c6798] {\n  display: inline-block;\n}\n.nav ul li a[data-v-370c6798] {\n  color: white;\n  padding: 10px 25px;\n  font-size: 15px;\n  cursor: pointer;\n}\n.nav nav ul li:hover a[data-v-370c6798] {\n  color: #333333;\n}\n.logged_in[data-v-370c6798]{\n  margin-left: auto;\n}\nul li span[data-v-370c6798] {\n  color: white;\n  padding: 10px 15px;\n  font-size: 15px;\n  cursor: pointer;\n}\n.nav nav ul li:hover span[data-v-370c6798] {\n  color: #333333;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main" },
    [
      _c("navigation"),
      _vm._v(" "),
      _vm.login
        ? _c(
            "div",
            { staticClass: "login" },
            [_c("login", { on: { register: _vm.switchAuth } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.registration
        ? _c(
            "div",
            { staticClass: "register" },
            [_c("registration", { on: { login: _vm.switchAuth } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "mini_box_1" }),
      _vm._v(" "),
      _c("div", { staticClass: "mini_box_2" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container register" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-3 register-left" }, [
        _c("img", {
          attrs: { src: "https://image.ibb.co/n7oTvU/logo_white.png", alt: "" }
        }),
        _vm._v(" "),
        _c("h3", { attrs: { cl: "" } }, [_vm._v("Welcome")]),
        _vm._v(" "),
        _c("p", [
          _vm._v("You are 30 seconds away from earning your own money!")
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            directives: [
              {
                name: "waves",
                rawName: "v-waves.button",
                modifiers: { button: true }
              },
              {
                name: "waves",
                rawName: "v-waves.float",
                modifiers: { float: true }
              }
            ],
            staticClass: "bg-white rounded-pill sec_color",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.register("register")
              }
            }
          },
          [_vm._v("Register")]
        ),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "col-md-9 register-right",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs nav-justified",
              attrs: { id: "myTab", role: "tablist" }
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      id: "home-tab",
                      "data-toggle": "tab",
                      href: "#home",
                      role: "tab",
                      "aria-controls": "home",
                      "aria-selected": "true"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeType("tutor")
                      }
                    }
                  },
                  [_vm._v("Tutor")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "profile-tab",
                      "data-toggle": "tab",
                      href: "#profile",
                      role: "tab",
                      "aria-controls": "profile",
                      "aria-selected": "false"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeType("student")
                      }
                    }
                  },
                  [_vm._v("Student")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content", attrs: { id: "myTabContent" } },
            [
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show active",
                  attrs: {
                    id: "home",
                    role: "tabpanel",
                    "aria-labelledby": "home-tab"
                  }
                },
                [
                  _c("h3", { staticClass: "register-heading" }, [
                    _vm._v("Login as a Student")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row register-form" }, [
                    _c("div", { staticClass: "col-md-6 mx-auto" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", placeholder: "Your Email *" },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.password,
                              expression: "user.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Password *"
                          },
                          domProps: { value: _vm.user.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "waves",
                              rawName: "v-waves.button",
                              modifiers: { button: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.float",
                              modifiers: { float: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.light",
                              modifiers: { light: true }
                            }
                          ],
                          staticClass: "btnRegister",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Login")]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show",
                  attrs: {
                    id: "profile",
                    role: "tabpanel",
                    "aria-labelledby": "profile-tab"
                  }
                },
                [
                  _c("h3", { staticClass: "register-heading" }, [
                    _vm._v("Login as a Tutor")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row register-form" }, [
                    _c("div", { staticClass: "col-md-6 mx-auto" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", placeholder: "Your Email *" },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.email,
                              expression: "user.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Password *"
                          },
                          domProps: { value: _vm.user.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.user, "email", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "waves",
                              rawName: "v-waves.button",
                              modifiers: { button: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.float",
                              modifiers: { float: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.light",
                              modifiers: { light: true }
                            }
                          ],
                          staticClass: "btnRegister",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Login")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid register" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "form",
        {
          staticClass: "col-md-9 mx-auto register-right",
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "ul",
            {
              staticClass: "nav nav-tabs nav-justified",
              attrs: { id: "myTab", role: "tablist" }
            },
            [
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link active",
                    attrs: {
                      id: "home-tab",
                      "data-toggle": "tab",
                      href: "#home",
                      role: "tab",
                      "aria-controls": "home",
                      "aria-selected": "true"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeType("student")
                      }
                    }
                  },
                  [_vm._v("Student")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link",
                    attrs: {
                      id: "profile-tab",
                      "data-toggle": "tab",
                      href: "#profile",
                      role: "tab",
                      "aria-controls": "profile",
                      "aria-selected": "false"
                    },
                    on: {
                      click: function($event) {
                        return _vm.changeType("tutor")
                      }
                    }
                  },
                  [_vm._v("Tutor")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "tab-content", attrs: { id: "myTabContent" } },
            [
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show active",
                  attrs: {
                    id: "home",
                    role: "tabpanel",
                    "aria-labelledby": "home-tab"
                  }
                },
                [
                  _c("h3", { staticClass: "register-heading" }, [
                    _vm._v("Apply as a Student")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row register-form" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.name,
                              expression: "user.student.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Full Name *" },
                          domProps: { value: _vm.user.student.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.password,
                              expression: "user.student.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Password *"
                          },
                          domProps: { value: _vm.user.student.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "maxl" }, [
                          _c("label", { staticClass: "radio inline" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.student.gender,
                                  expression: "user.student.gender"
                                }
                              ],
                              attrs: {
                                type: "radio",
                                name: "gender",
                                value: "male",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(_vm.user.student.gender, "male")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.user.student,
                                    "gender",
                                    "male"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Male")])
                          ]),
                          _vm._v(" "),
                          _c("label", { staticClass: "radio inline" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.student.gender,
                                  expression: "user.student.gender"
                                }
                              ],
                              attrs: {
                                type: "radio",
                                name: "gender",
                                value: "female"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.user.student.gender,
                                  "female"
                                )
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.user.student,
                                    "gender",
                                    "female"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Female")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.email,
                              expression: "user.student.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", placeholder: "Your Email *" },
                          domProps: { value: _vm.user.student.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.phone,
                              expression: "user.student.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            minlength: "10",
                            maxlength: "10",
                            name: "txtEmpPhone",
                            placeholder: "Your Phone *"
                          },
                          domProps: { value: _vm.user.student.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "phone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.mat_no,
                              expression: "user.student.mat_no"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            minlength: "10",
                            maxlength: "10",
                            name: "txtEmpPhone",
                            placeholder: "Your Mat No"
                          },
                          domProps: { value: _vm.user.student.mat_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "mat_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.student.level_of_edu,
                                expression: "user.student.level_of_edu"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.student,
                                  "level_of_edu",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Please select your Level of Education")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.student.school,
                                expression: "user.student.school"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.student,
                                  "school",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select School")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.student.faculty,
                                expression: "user.student.faculty"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.student,
                                  "faculty",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Faculty")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.student.department,
                                expression: "user.student.department"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.student,
                                  "department",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Department")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.student.course_level,
                                expression: "user.student.course_level"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.student,
                                  "course_level",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Course Level")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "waves",
                              rawName: "v-waves.button",
                              modifiers: { button: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.float",
                              modifiers: { float: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.light",
                              modifiers: { light: true }
                            }
                          ],
                          staticClass: "btnRegister",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Register")]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "tab-pane fade show",
                  attrs: {
                    id: "profile",
                    role: "tabpanel",
                    "aria-labelledby": "profile-tab"
                  }
                },
                [
                  _c("h3", { staticClass: "register-heading" }, [
                    _vm._v("Apply as a Tutor")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row register-form" }, [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.tutor.name,
                              expression: "user.tutor.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", placeholder: "Full Name *" },
                          domProps: { value: _vm.user.tutor.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.tutor,
                                "name",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.tutor.password,
                              expression: "user.tutor.password"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            placeholder: "Password *"
                          },
                          domProps: { value: _vm.user.tutor.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.tutor,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "maxl" }, [
                          _c("label", { staticClass: "radio inline" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.tutor.gender,
                                  expression: "user.tutor.gender"
                                }
                              ],
                              attrs: {
                                type: "radio",
                                name: "gender",
                                value: "male",
                                checked: ""
                              },
                              domProps: {
                                checked: _vm._q(_vm.user.tutor.gender, "male")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.user.tutor,
                                    "gender",
                                    "male"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Male")])
                          ]),
                          _vm._v(" "),
                          _c("label", { staticClass: "radio inline" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.user.tutor.gender,
                                  expression: "user.tutor.gender"
                                }
                              ],
                              attrs: {
                                type: "radio",
                                name: "gender",
                                value: "female"
                              },
                              domProps: {
                                checked: _vm._q(_vm.user.tutor.gender, "female")
                              },
                              on: {
                                change: function($event) {
                                  return _vm.$set(
                                    _vm.user.tutor,
                                    "gender",
                                    "female"
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v("Female")])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.tutor.email,
                              expression: "user.tutor.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "email", placeholder: "Your Email *" },
                          domProps: { value: _vm.user.tutor.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.tutor,
                                "email",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.tutor.phone,
                              expression: "user.tutor.phone"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            minlength: "10",
                            maxlength: "10",
                            name: "txtEmpPhone",
                            placeholder: "Your Phone *"
                          },
                          domProps: { value: _vm.user.tutor.phone },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.tutor,
                                "phone",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.user.student.id_no,
                              expression: "user.student.id_no"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            minlength: "10",
                            maxlength: "10",
                            name: "txtEmpPhone",
                            placeholder: "Your Mat No"
                          },
                          domProps: { value: _vm.user.student.id_no },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.user.student,
                                "id_no",
                                $event.target.value
                              )
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.tutor.level_of_edu,
                                expression: "user.tutor.level_of_edu"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.tutor,
                                  "level_of_edu",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Please select your Level of Education")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.tutor.school,
                                expression: "user.tutor.school"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.tutor,
                                  "school",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select School")]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.tutor.faculty,
                                expression: "user.tutor.faculty"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.tutor,
                                  "faculty",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Faculty")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.tutor.department,
                                expression: "user.tutor.department"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.tutor,
                                  "department",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Department")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.tutor.course_level,
                                expression: "user.tutor.course_level"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.user.tutor,
                                  "course_level",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c(
                              "option",
                              {
                                staticClass: "hidden",
                                attrs: { selected: "", disabled: "" }
                              },
                              [_vm._v("Select Course Level")]
                            ),
                            _vm._v(" "),
                            _c("option", [_vm._v("Professional")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Tertiary")]),
                            _vm._v(" "),
                            _c("option", [_vm._v("Secondary")]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Primary")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "Other" } }, [
                              _vm._v("Other")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "waves",
                              rawName: "v-waves.button",
                              modifiers: { button: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.float",
                              modifiers: { float: true }
                            },
                            {
                              name: "waves",
                              rawName: "v-waves.light",
                              modifiers: { light: true }
                            }
                          ],
                          staticClass: "btnRegister",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Register")]
                      )
                    ])
                  ])
                ]
              )
            ]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main_container" }, [
    _c("div", { staticClass: "square" }, [
      _c("div", { staticClass: "mini_square_1" }),
      _vm._v(" "),
      _c("div", { staticClass: "mini_square_2" }),
      _vm._v(" "),
      _c("div", { staticClass: "square_text" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sub_text" },
          [
            _c("router-link", { attrs: { to: "/auth" } }, [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "waves",
                      rawName: "v-waves.button",
                      modifiers: { button: true }
                    },
                    {
                      name: "waves",
                      rawName: "v-waves.float",
                      modifiers: { float: true }
                    },
                    {
                      name: "waves",
                      rawName: "v-waves.light",
                      modifiers: { light: true }
                    }
                  ],
                  staticClass: "bg-white"
                },
                [
                  _c("span", { staticClass: "mr-2 sec_color" }, [
                    _vm._v(" Enroll Now")
                  ]),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fa fa-long-arrow-right sec_color",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "circle_1 rounded-circle" }),
    _vm._v(" "),
    _c("div", { staticClass: "circle_2 rounded-circle" }),
    _vm._v(" "),
    _c("div", { staticClass: "circle_3 rounded-circle" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main_text josefin" }, [
      _vm._v("\n          EDUCATION "),
      _c("br"),
      _vm._v("  IN IMO "),
      _c("br"),
      _vm._v(" HAS A    NEW FACE\n      ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "main" },
    [_c("app-navigation"), _vm._v(" "), _c("app-banner")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "navigation" } }, [
    _c("div", { staticClass: "logo" }),
    _vm._v(" "),
    _c("div", { staticClass: "nav" }, [
      _c("nav", { staticClass: "ml-auto" }, [
        _vm.auth
          ? _c("ul", { staticClass: "logged_in" }, [
              _c("li", [
                _c("span", { staticClass: "name" }, [
                  _c("i", {
                    staticClass: "fa fa-user-circle-o ",
                    attrs: { "aria-hidden": "true" }
                  }),
                  _vm._v(" Hi " + _vm._s(_vm.name))
                ])
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          : _c("ul", [
              _c(
                "li",
                [_c("router-link", { attrs: { to: "/" } }, [_vm._v("Home")])],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "Auth",
                          query: {
                            authType: "login"
                          }
                        }
                      }
                    },
                    [_vm._v("Login")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "Auth",
                          query: {
                            authType: "register"
                          }
                        }
                      }
                    },
                    [_vm._v("Register")]
                  )
                ],
                1
              )
            ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [
        _vm._v("Logout "),
        _c("i", {
          staticClass: "fa fa-sign-out",
          attrs: { "aria-hidden": "true" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/auth/auth.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/auth/auth.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.vue?vue&type=template&id=2557a474&scoped=true& */ "./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true&");
/* harmony import */ var _auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& */ "./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2557a474",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/auth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/auth.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/auth/auth.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=style&index=0&id=2557a474&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_style_index_0_id_2557a474_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./auth.vue?vue&type=template&id=2557a474&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/auth.vue?vue&type=template&id=2557a474&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_auth_vue_vue_type_template_id_2557a474_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/auth/login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/auth/login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=6aa0b866&scoped=true& */ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6aa0b866",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=style&index=0&id=6aa0b866&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_6aa0b866_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=6aa0b866&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/login.vue?vue&type=template&id=6aa0b866&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_6aa0b866_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/auth/registration.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/auth/registration.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.vue?vue&type=template&id=0a4369f6&scoped=true& */ "./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true&");
/* harmony import */ var _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.vue?vue&type=script&lang=js& */ "./resources/js/components/auth/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& */ "./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a4369f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/auth/registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/auth/registration.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/auth/registration.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=style&index=0&id=0a4369f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_0a4369f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=template&id=0a4369f6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/auth/registration.vue?vue&type=template&id=0a4369f6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_0a4369f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/home/banner.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/home/banner.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner.vue?vue&type=template&id=45b4b761&scoped=true& */ "./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true&");
/* harmony import */ var _banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.vue?vue&type=script&lang=js& */ "./resources/js/components/home/banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& */ "./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "45b4b761",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/home/banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/home/banner.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/home/banner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=style&index=0&id=45b4b761&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_style_index_0_id_45b4b761_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./banner.vue?vue&type=template&id=45b4b761&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/home/banner.vue?vue&type=template&id=45b4b761&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banner_vue_vue_type_template_id_45b4b761_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/index.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2ac2c897&scoped=true& */ "./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& */ "./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ac2c897",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=style&index=0&id=2ac2c897&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2ac2c897_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2ac2c897&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/index.vue?vue&type=template&id=2ac2c897&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2ac2c897_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/navigation/navigation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/navigation/navigation.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.vue?vue&type=template&id=370c6798&scoped=true& */ "./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true&");
/* harmony import */ var _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.vue?vue&type=script&lang=js& */ "./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& */ "./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "370c6798",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/navigation/navigation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=style&index=0&id=370c6798&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_style_index_0_id_370c6798_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./navigation.vue?vue&type=template&id=370c6798&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/navigation/navigation.vue?vue&type=template&id=370c6798&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_navigation_vue_vue_type_template_id_370c6798_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);