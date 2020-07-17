(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      admin: {
        name: "",
        abbreviation: "",
        email: "",
        phone: null,
        address: "",
        password: ""
      },
      spin: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      axios.post("/api/school-register", this.admin).then(function (res) {
        if (res.status == 201) {
          var regDetails = {};
          regDetails.email = res.data.email;
          regDetails.name = res.data.schools;
          regDetails.school_id = res.data.id;
          localStorage.setItem("regDetails", JSON.stringify(regDetails));

          _this.$toasted.info("Successful");

          _this.$router.push('/checkout?redirection_from=registration');
        }
      });
    }
  }
});

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
exports.push([module.i, "\n.container-fluid[data-v-0a4369f6] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\n}\nform[data-v-0a4369f6]{\r\n    width:50%;\r\n     background: #f7f8fa;\r\n     padding: 15px;\n}\n.register[data-v-0a4369f6] {\r\n  background: transparent;\r\n  padding: 3%;\n}\n.register-left[data-v-0a4369f6] {\r\n  text-align: center;\r\n  color: #fff;\r\n  padding-top: 4%;\n}\n.register-left input[data-v-0a4369f6] {\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 2%;\r\n  width: 60%;\r\n  background: #f7f8fa;\r\n  font-weight: bold;\r\n  color: #383d41;\r\n  margin-top: 28%;\r\n  margin-bottom: 3%;\r\n  cursor: pointer;\n}\n.register-right[data-v-0a4369f6] {\r\n  background: #f7f8fa;\r\n  border-top-left-radius: 10% 50%;\r\n  border-bottom-left-radius: 10% 50%;\r\n  width: 80%;\r\n  height: 85%;\r\n  padding: 0 15px;\n}\n.register-left img[data-v-0a4369f6] {\r\n  margin-top: 15%;\r\n  margin-bottom: 5%;\r\n  width: 25%;\r\n  -webkit-animation: mover-data-v-0a4369f6 2s infinite alternate;\r\n  animation: mover-data-v-0a4369f6 1s infinite alternate;\n}\n@-webkit-keyframes mover-data-v-0a4369f6 {\n0% {\r\n    transform: translateY(0);\n}\n100% {\r\n    transform: translateY(-20px);\n}\n}\n@keyframes mover-data-v-0a4369f6 {\n0% {\r\n    transform: translateY(0);\n}\n100% {\r\n    transform: translateY(-20px);\n}\n}\n.register-left p[data-v-0a4369f6] {\r\n  font-weight: lighter;\r\n  padding: 12%;\r\n  margin-top: -9%;\n}\n.register .register-form[data-v-0a4369f6] {\r\n  padding: 10%;\r\n  margin-top: 10%;\n}\n.btnRegister[data-v-0a4369f6] {\r\n  float: right;\r\n  margin-top: 10%;\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 4%;\r\n  background: repeating-linear-gradient(\r\n    to right,\r\n    rgb(15, 122, 138, 0.7) 0%,\r\n    rgb(15, 122, 138, 0.7) 100%\r\n  );\r\n  color: #fff;\r\n  font-weight: 600;\r\n  width: 50%;\r\n  cursor: pointer;\n}\n.register .nav-tabs[data-v-0a4369f6] {\r\n  margin-top: 3%;\r\n  border: none;\r\n  background: repeating-linear-gradient(\r\n    to right,\r\n    rgb(15, 122, 138, 0.7) 0%,\r\n    rgb(15, 122, 138, 0.7) 100%\r\n  );\r\n  border-radius: 1.5rem;\r\n  width: 20%;\r\n  float: right;\r\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-0a4369f6] {\r\n  padding: 2%;\r\n  height: 34px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  border-top-right-radius: 1.5rem;\r\n  border-bottom-right-radius: 1.5rem;\r\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-0a4369f6]:hover {\r\n  border: none;\n}\n.register .nav-tabs .nav-link.active[data-v-0a4369f6] {\r\n  width: 100px;\r\n  color: #5fa1ac;\r\n  border: 2px solid #5fa1ac;\r\n  border-top-left-radius: 1.5rem;\r\n  border-bottom-left-radius: 1.5rem;\n}\n.register-heading[data-v-0a4369f6] {\r\n  text-align: center;\r\n  margin-top: 8%;\r\n  margin-bottom: -15%;\r\n  color: #495057;\n}\n@media (max-width: 1024px) {\n.register .nav-tabs[data-v-0a4369f6] {\r\n    width: 35%;\n}\nh4.register-heading[data-v-0a4369f6] {\r\n    font-size: 22px;\n}\n.register-form[data-v-0a4369f6] {\r\n    width: 100%;\n}\n}\n@media (max-width: 768px) {\n.register .nav-tabs[data-v-0a4369f6] {\r\n    width: 35%;\n}\n.register-right[data-v-0a4369f6] {\r\n    width: 90%;\n}\n}\n@media (max-width: 425px) {\n.register-right[data-v-0a4369f6] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\n}\n.register-right[data-v-0a4369f6] {\r\n    width: 100%;\r\n    height: 75vh;\r\n    overflow: scroll;\r\n    padding-top: 80%;\n}\n.register .nav-tabs[data-v-0a4369f6] {\r\n    width: 60%;\r\n    margin: 3% auto 0;\n}\n.register-left[data-v-0a4369f6] {\r\n    padding-bottom: 20px;\n}\n}\r\n", ""]);

// exports


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
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.register($event)
          }
        }
      },
      [
        _c("legend", [_vm._v("Register School")]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.name,
                expression: "admin.name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "name",
              id: "name",
              "aria-describedby": "helpId",
              placeholder: "University of Example"
            },
            domProps: { value: _vm.admin.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Email")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.email,
                expression: "admin.email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              name: "email",
              id: "email",
              "aria-describedby": "helpId",
              placeholder: "example@email.com"
            },
            domProps: { value: _vm.admin.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "email", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Password")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.password,
                expression: "admin.password"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "password",
              name: "password",
              id: "password",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.admin.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "password", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Abbreviation")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.abbreviation,
                expression: "admin.abbreviation"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "abbreviation",
              id: "abbreviation",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.admin.abbreviation },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "abbreviation", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Phone")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.phone,
                expression: "admin.phone"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "tel",
              name: "phone",
              id: "phone",
              maxlength: "11",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.admin.phone },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "phone", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("Address")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.admin.address,
                expression: "admin.address"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "address",
              id: "address",
              "aria-describedby": "helpId",
              placeholder: ""
            },
            domProps: { value: _vm.admin.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.admin, "address", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button-blue", attrs: { type: "submit" } },
          [_vm._v("Register")]
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



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



/***/ })

}]);