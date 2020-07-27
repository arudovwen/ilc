<template>
  <!-- <div class="main-login">
    <b-container>
      <b-row>
        <b-col>
          <img src="/images/footer-logo.png" alt />
         
        </b-col>
        <b-col>
          <b-card class="login-card">
            <h4 class="text-center">LOG IN</h4>
            <div>
              <b-tabs content-class="mt-3">
                <b-tab title="Student" active>
                  <b-form class="login-form">
                    <b-form-group 
                    id="input-group-1"
                    label="Email"
                    >
                      <b-form-input
                       id="input-1"
                       type="email"
                       required
                      ></b-form-input>
                    </b-form-group>
                          <b-form-group 
                    id="input-group-2"
                    label="Password"
                    >
                      <b-form-input
                       id="input-2"
                       type="password"
                       required
                      ></b-form-input>
                      <button class="reg-btn" type="submit">STUDENT</button>
                      <a href="" class="s">forgot Password?</a>
                    </b-form-group>
                  </b-form>
                </b-tab>
                <b-tab title="Tutor">
                  <b-form class="login-form">
                    <b-form-group 
                    id="input-group-1"
                    label="Email"
                    >
                      <b-form-input
                       id="input-1"
                       type="email"
                       required
                      ></b-form-input>
                    </b-form-group>
                          <b-form-group 
                    id="input-group-2"
                    label="Password"
                    >
                      <b-form-input
                       id="input-2"
                       type="password"
                       required
                      ></b-form-input>
                      <button class="reg-btn" type="submit">TUTOR</button>
                      <a href="">forgot password?</a>
                    </b-form-group>
                  </b-form>
                </b-tab>
              </b-tabs>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

   
  </div> -->

  <div class>
    <div class="register-section">
      <div class="img-side">
        <div class="header-logo text-center">
          <img src="/images/logo-ilc-single.png" alt />
          <h6>IMO STATE LEARNING CENTER</h6>
        </div>
        <h2>Welcome!!!!!</h2>
        <div>&copy; Copyright 2020 Couer</div>
      </div>
      <div class="form-side">
        <h2 class="text-center">LOGIN</h2>
        <b-container class="bv-example-row">
          <b-form @submit.prevent="submit">

            <b-form-row>
              <b-col class="text-center d-flex align-items-center justify-content-center">
               <label class=" mr-3" :class="{'text-muted':user.type}"> Student</label> <b-form-checkbox switch v-model="user.type" size="lg"  :class="{'text-muted':!user.type}">Tutor</b-form-checkbox>
              </b-col>
            </b-form-row>
            <b-form-row>
              
              <b-col>
                <b-form-group id="input-group-2" label="Email " label-for="input-2">
                  <b-form-input id="input-8" type="email" v-model="user.email" required placeholder></b-form-input>
                </b-form-group>
                    <b-form-group id="input-group-3" label="Password" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    type="password"
                    v-model="user.password"
                    required
                    placeholder
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

           
            <button class="reg-btn" type="submit">{{user.type?'TUTOR':'STUDENT'}} LOGIN <b-spinner variant="" small label="small spinner" type="grow" class="ml-2" v-if="spin"></b-spinner></button>
            
            <p class="form-txt my-3">
             Don't have an account??
              <span>
              <router-link to="/school/register">Register</router-link>
              </span>
            </p>
          </b-form>
        </b-container>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      user: {
        type: false,
        email: "",
        password: "",
      },
      spin: false,
    };
  },
  methods: {
    submit() {
      this.spin = true;
      if (!this.user.type) {
        let data = {
          grant_type: "password",
          client_id: 2,
          client_secret: "7yRvzmjeVaIpSUJKBW5PCfkVCVSBauhRwRgEvt36",
          username: this.user.email,
          password: this.user.password,
        };

        const typeStudent = {};
        axios
          .post("/oauth/token", data)
          .then((res) => {
            if (res.status == 200) {
              typeStudent.access_token = res.data.access_token;
              typeStudent.refresh_token = res.data.refresh_token;
              axios
                .get(`/api/user`, {
                  headers: { Authorization: `Bearer ${res.data.access_token}` },
                })
                .then((res) => {
                  if (res.status === 200) {
                    this.spin = false;

                    typeStudent.id = res.data.id;
                    typeStudent.email = res.data.email;
                    typeStudent.level = res.data.student_level;
                    typeStudent.name = res.data.name;
                    typeStudent.school_id = res.data.school_id;
                    typeStudent.school = res.data.school;
                       typeStudent.abbreviation = res.data.abbreviation;
                    localStorage.setItem(
                      "typeStudent",
                      JSON.stringify(typeStudent)
                    );
                    this.$toasted.success("Logged in Sucessfully", {
                      icon: {
                        name: "fingerprint",
                      },
                    });
                    if (this.$route.query.redirect) {
                      this.$router.push(this.$route.query.redirect);
                    } else {
                      this.$toasted.info("Redirecting to dashboard..");
                      this.$router.push("/student");
                    }
                  }
                })
                .catch((error) => {
                  this.$toasted.error("Invalid credentials", {
                    icon: {
                      name: "user-times",
                    },
                  });
                  this.spin = false;
                });
            }
          })
          .catch((error) => {
            this.$toasted.error("Invalid credentials", {
              icon: {
                name: "user-times",
              },
            });
            this.spin = false;
          });
      } else {
        this.spin = true;
        let data = {
          grant_type: "password",
          client_id: 3,
          client_secret: "MK7qWmbsqhwtUXfr3f3OgEm0uHLw3hm3EsGycQDs",
          username: this.user.email,
          password: this.user.password,
        };
        const typeTutor = {};
        axios
          .post("/oauth/token", data)
          .then((res) => {
            if (res.status == 200) {
              typeTutor.access_token = res.data.access_token;
              typeTutor.refresh_token = res.data.refresh_token;
              axios
                .get(`/api/tutorDetails`, {
                  headers: { Authorization: `Bearer ${res.data.access_token}` },
                })
                .then((res) => {
                  if (res.status === 200) {
                    this.spin = false;
                    typeTutor.id = res.data.id;
                    typeTutor.email = res.data.email;
                    typeTutor.name = res.data.name;
                     typeTutor.school = res.data.school;
                      typeTutor.abbreviation = res.data.abbreviation;
                    localStorage.setItem(
                      "typeTutor",
                      JSON.stringify(typeTutor)
                    );
                    this.$toasted.success("Logged in Sucessfully", {
                      icon: {
                        name: "fingerprint",
                      },
                    });
                    this.$router.push("/tutor");
                  }
                })
                .catch((error) => {
                  console.log("submit -> error", error);
                  this.$toasted.error("Invalid credentials", {
                    icon: {
                      name: "user-times",
                    },
                  });
                  this.spin = false;
                });
            }
          })
          .catch((error) => {
            console.log("submit -> error", error);
            this.$toasted.error("Invalid credentials", {
              icon: {
                name: "user-times",
              },
            });
            this.spin = false;
          });
      }
    },
  },
};
</script>

<style scoped>
label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
  font-size: 1.25rem;
  line-height: 1.5;
}
.text-muted {
  color: rgba(0, 0, 0, 0.4) !important;
}
</style>

