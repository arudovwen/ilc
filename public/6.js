(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{BkMq:function(t,r,e){"use strict";var a=e("nzPV");e.n(a).a},PSuA:function(t,r,e){"use strict";e.r(r);var a={data:function(){return{user:{type:"student",email:"",password:""},spin:!1}},methods:{register:function(t){this.$emit("register",t)},changeType:function(t){this.user.type=t},submit:function(){var t=this;if(this.spin=!0,"student"==this.user.type){var r={grant_type:"password",client_id:2,client_secret:"7yRvzmjeVaIpSUJKBW5PCfkVCVSBauhRwRgEvt36",username:this.user.email,password:this.user.password},e={};axios.post("/oauth/token",r).then((function(r){200==r.status&&(e.access_token=r.data.access_token,e.refresh_token=r.data.refresh_token,axios.get("/api/user",{headers:{Authorization:"Bearer ".concat(r.data.access_token)}}).then((function(r){200===r.status&&(t.spin=!1,e.id=r.data.id,e.email=r.data.email,e.name=r.data.name,e.school_id=r.data.school_id,e.school=r.data.school,localStorage.setItem("typeStudent",JSON.stringify(e)),t.$toasted.success("Sucessful"),t.$route.query.redirect?t.$router.push(t.$route.query.redirect):(t.$toasted.info("Redirecting to dashboard.."),t.$router.push("/student")))})).catch((function(r){console.log("submit -> error",r),t.$toasted.error("Something is not right"),t.spin=!1})))})).catch((function(r){console.log("submit -> error",r),t.$toasted.error("Something is not right"),t.spin=!1}))}else{this.spin=!0;var a={grant_type:"password",client_id:3,client_secret:"MK7qWmbsqhwtUXfr3f3OgEm0uHLw3hm3EsGycQDs",username:this.user.email,password:this.user.password},n={};axios.post("/oauth/token",a).then((function(r){200==r.status&&(n.access_token=r.data.access_token,n.refresh_token=r.data.refresh_token,axios.get("/api/tutorDetails",{headers:{Authorization:"Bearer ".concat(r.data.access_token)}}).then((function(r){200===r.status&&(t.spin=!1,n.id=r.data.id,n.email=r.data.email,n.name=r.data.name,localStorage.setItem("typeTutor",JSON.stringify(n)),t.$toasted.success("Sucessful"),t.$router.push("/tutor"))})).catch((function(r){console.log("submit -> error",r),t.$toasted.error("Something is not right"),t.spin=!1})))})).catch((function(r){console.log("submit -> error",r),t.$toasted.error("Something is not right"),t.spin=!1}))}}}},n=(e("BkMq"),e("KHd+")),s=Object(n.a)(a,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container register"},[e("form",{staticClass:"col-md-9 register-right",on:{submit:function(r){return r.preventDefault(),t.submit(r)}}},[e("ul",{staticClass:"nav nav-tabs nav-justified",attrs:{id:"myTab",role:"tablist"}},[e("li",{staticClass:"nav-item",on:{click:function(r){return t.changeType("student")}}},[e("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home"}},[t._v("Student")])]),t._v(" "),e("li",{staticClass:"nav-item",on:{click:function(r){return t.changeType("tutor")}}},[e("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Tutor")])])]),t._v(" "),e("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},["student"==t.user.type?e("div",{staticClass:"tab-pane fade show active",attrs:{id:"home",role:"tabpanel","aria-labelledby":"home-tab"}},[e("h4",{staticClass:"register-heading"},[t._v("Login as a Student")]),t._v(" "),e("div",{staticClass:"row register-form"},[e("div",{staticClass:"col-md-9 mx-auto"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:"Your Email *"},domProps:{value:t.user.email},on:{input:function(r){r.target.composing||t.$set(t.user,"email",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Password *"},domProps:{value:t.user.password},on:{input:function(r){r.target.composing||t.$set(t.user,"password",r.target.value)}}})]),t._v(" "),e("button",{directives:[{name:"waves",rawName:"v-waves.button",modifiers:{button:!0}},{name:"waves",rawName:"v-waves.float",modifiers:{float:!0}},{name:"waves",rawName:"v-waves.light",modifiers:{light:!0}}],staticClass:"btnRegister",attrs:{type:"submit"}},[t.spin?e("span",{staticClass:"spinner-border spinner-border-sm"}):t._e(),t._v(" Login\n            ")])])])]):t._e(),t._v(" "),"tutor"==t.user.type?e("div",{staticClass:"tab-pane fade show",attrs:{id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}},[e("h4",{staticClass:"register-heading"},[t._v("Login as a Tutor")]),t._v(" "),e("div",{staticClass:"row register-form"},[e("div",{staticClass:"col-md-6 mx-auto"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:"Your Email *"},domProps:{value:t.user.email},on:{input:function(r){r.target.composing||t.$set(t.user,"email",r.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Password *"},domProps:{value:t.user.password},on:{input:function(r){r.target.composing||t.$set(t.user,"password",r.target.value)}}})]),t._v(" "),e("button",{directives:[{name:"waves",rawName:"v-waves.button",modifiers:{button:!0}},{name:"waves",rawName:"v-waves.float",modifiers:{float:!0}},{name:"waves",rawName:"v-waves.light",modifiers:{light:!0}}],staticClass:"btnRegister",attrs:{type:"submit"}},[t.spin?e("span",{staticClass:"spinner-border spinner-border-sm"}):t._e(),t._v(" Login\n            ")])])])]):t._e()])])])}),[],!1,null,"d80dbf32",null);r.default=s.exports},gO3b:function(t,r,e){(t.exports=e("I1BE")(!1)).push([t.i,"\n.container[data-v-d80dbf32] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\n}\n.register[data-v-d80dbf32] {\r\n  background: transparent;\r\n  padding: 3%;\n}\n.register-left[data-v-d80dbf32] {\r\n  text-align: center;\r\n  color: #fff;\r\n  padding-top: 4%;\r\n  width: 30%;\n}\n.register-left input[data-v-d80dbf32] {\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 2%;\r\n  width: 60%;\r\n  background: #f7f8fa;\r\n  font-weight: bold;\r\n  color: #383d41;\r\n  margin-top: 30%;\r\n  margin-bottom: 3%;\r\n  cursor: pointer;\n}\n.register-right[data-v-d80dbf32] {\r\n  background: #f7f8fa;\r\n  border-top-left-radius: 10% 50%;\r\n  border-bottom-left-radius: 10% 50%;\r\n  width: 80%;\n}\n.register-left img[data-v-d80dbf32] {\r\n  margin-top: 15%;\r\n  margin-bottom: 5%;\r\n  width: 25%;\r\n  -webkit-animation: mover-data-v-d80dbf32 2s infinite alternate;\r\n  animation: mover-data-v-d80dbf32 1s infinite alternate;\n}\n@-webkit-keyframes mover-data-v-d80dbf32 {\n0% {\r\n    transform: translateY(0);\n}\n100% {\r\n    transform: translateY(-20px);\n}\n}\n@keyframes mover-data-v-d80dbf32 {\n0% {\r\n    transform: translateY(0);\n}\n100% {\r\n    transform: translateY(-20px);\n}\n}\n.register-left p[data-v-d80dbf32] {\r\n  font-weight: lighter;\r\n  padding: 12%;\r\n  margin-top: -9%;\n}\n.register .register-form[data-v-d80dbf32] {\r\n  padding: 10%;\r\n  margin-top: 10%;\n}\n.btnRegister[data-v-d80dbf32] {\r\n  float: right;\r\n  margin-top: 10%;\r\n  border: none;\r\n  border-radius: 1.5rem;\r\n  padding: 4%;\r\n  background: repeating-linear-gradient(\r\n    to right,\r\n    rgb(15, 122, 138, 0.7) 0%,\r\n    rgb(15, 122, 138, 0.7) 100%\r\n  );\r\n  color: #fff;\r\n  font-weight: 600;\r\n  width: 50%;\r\n  cursor: pointer;\n}\n.register .nav-tabs[data-v-d80dbf32] {\r\n  margin-top: 3%;\r\n  border: none;\r\n  background: repeating-linear-gradient(\r\n    to right,\r\n    rgb(15, 122, 138, 0.7) 0%,\r\n    rgb(15, 122, 138, 0.7) 100%\r\n  );\r\n  border-radius: 1.5rem;\r\n  width: 28%;\r\n  float: right;\r\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-d80dbf32] {\r\n  padding: 2%;\r\n  height: 34px;\r\n  font-weight: 600;\r\n  color: #fff;\r\n  border-top-right-radius: 1.5rem;\r\n  border-bottom-right-radius: 1.5rem;\r\n  font-size: 14px;\n}\n.register .nav-tabs .nav-link[data-v-d80dbf32]:hover {\r\n  border: none;\n}\n.register .nav-tabs .nav-link.active[data-v-d80dbf32] {\r\n  width: 100px;\r\n  color: #5fa1ac;\r\n  border: 2px solid #5fa1ac;\r\n  border-top-left-radius: 1.5rem;\r\n  border-bottom-left-radius: 1.5rem;\n}\n.register-heading[data-v-d80dbf32] {\r\n  text-align: center;\r\n  margin-top: 8%;\r\n  margin-bottom: -15%;\r\n  color: #495057;\n}\n@media (max-width: 1024px) {\n.register .nav-tabs[data-v-d80dbf32] {\r\n    width: 35%;\n}\nh4.register-heading[data-v-d80dbf32] {\r\n    font-size: 22px;\n}\n.register-form[data-v-d80dbf32] {\r\n    width: 100%;\n}\n}\n@media (max-width: 768px) {\n.register .nav-tabs[data-v-d80dbf32] {\r\n    width: 40%;\n}\n}\n@media (max-width: 425px) {\n.register-right[data-v-d80dbf32] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\n}\n.register .nav-tabs[data-v-d80dbf32] {\r\n    width: 80%;\r\n    margin: 3% auto 0;\n}\n.register-left[data-v-d80dbf32] {\r\n    padding-bottom: 20px;\n}\n}\r\n",""])},nzPV:function(t,r,e){var a=e("gO3b");"string"==typeof a&&(a=[[t.i,a,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(a,n);a.locals&&(t.exports=a.locals)}}]);