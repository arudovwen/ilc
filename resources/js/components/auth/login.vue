<template>
  <div class="main-login">
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
                  <b-form @submit.prevent="submit" class="login-form">
                    <b-form-group id="input-group-1" label="Email">
                      <b-form-input id="input-1" v-model="user.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Password">
                      <b-form-input id="input-2" v-model="user.password" type="password" required></b-form-input>
                      <button class="reg-btn" type="submit">
                        STUDENT
                        <b-spinner
                          variant
                          small
                          label="small spinner"
                          type="grow"
                          class="ml-2"
                          v-if="spin"
                        ></b-spinner>
                      </button>
                      <a href class="s">forgot Password?</a>
                    </b-form-group>
                  </b-form>
                </b-tab>
                <b-tab title="Tutor">
                  <b-form @submit.prevent="tutorLogin" class="login-form">
                    <b-form-group id="input-group-1" label="Email">
                      <b-form-input id="input-1" v-model="tutor.email" type="email" required></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Password">
                      <b-form-input id="input-2" v-model="tutor.password" type="password" required></b-form-input>
                      <button class="reg-btn" type="submit">
                        TUTOR
                        <b-spinner
                          variant
                          small
                          label="small spinner"
                          type="grow"
                          class="ml-2"
                          v-if="spin"
                        ></b-spinner>
                      </button>
                      <a href>forgot password?</a>
                    </b-form-group>
                  </b-form>
                </b-tab>
              </b-tabs>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      tutor: {
        email: "",
        password: "",
      },
      spin: false,
    };
  },
  methods: {
    submit() {
      this.spin = true;

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
                  typeStudent.profile = res.data.profile;
                         typeStudent.student_level = res.data.student_level;
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
    },
    tutorLogin() {
      this.spin = true;
      let data = {
        grant_type: "password",
        client_id: 3,
        client_secret: "MK7qWmbsqhwtUXfr3f3OgEm0uHLw3hm3EsGycQDs",
        username: this.tutor.email,
        password: this.tutor.password,
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
                  typeTutor.profile = res.data.profile;
                       
                  localStorage.setItem("typeTutor", JSON.stringify(typeTutor));
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

