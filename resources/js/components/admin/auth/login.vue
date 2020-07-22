<template>
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
        <h2 class="text-center"></h2>
        <b-container class="bv-example-row">
          <b-form @submit.prevent="submit">
          <legend class="text-center">ADMIN LOGIN</legend>
            <b-form-row>
              
              <b-col>
                <b-form-group id="input-group-2" label="Email " label-for="input-2">
                  <b-form-input id="input-8" type="email" v-model="admin.email" required placeholder></b-form-input>
                </b-form-group>
                    <b-form-group id="input-group-3" label="Password" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    type="password"
                    v-model="admin.password"
                    required
                    placeholder
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

           
            <button class="reg-btn" type="submit">ADMIN LOGIN <b-spinner variant="" small label="small spinner" type="grow" class="ml-2" v-if="spin"></b-spinner></button>
            
           
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
      admin: {
        email: "",
        password: ""
      },
      spin: false
    };
  },
  methods: {
    submit() {
      this.spin = true;
      let data = {
        grant_type: "password",
        client_id: 4,
        client_secret: "VtKXCNi6gMuUx2XNv30RNl5xWI7Lme5vTjvbB8gD",
        username: this.admin.email,
        password: this.admin.password
      };
      const typeAdmin = {};
      axios
        .post("/oauth/token", data)
        .then(res => {
          if (res.status == 200) {
            typeAdmin.access_token = res.data.access_token;
            typeAdmin.refresh_token = res.data.refresh_token;
            axios
              .get(`/api/adminDetails`, {
                headers: { Authorization: `Bearer ${res.data.access_token}` }
              })
              .then(res => {
                if (res.status === 200) {
                  this.spin = false;
                  if (res.data.verify == 1) {
                    typeAdmin.email = res.data.email;
                     typeAdmin.abbreviation = res.data.abbreviation;
                    typeAdmin.name = res.data.name;
                    typeAdmin.school_id = res.data.school_id;
                    typeAdmin.school = res.data.school;
                     typeAdmin.role = res.data.role;
                    localStorage.setItem(
                      "typeAdmin",
                      JSON.stringify(typeAdmin)
                    );
                  this.$toasted.success("Logged in Sucessfully",{
                      icon:{
                        name:'fingerprint'
                      }
                    });
                    if (this.$route.query.redirect) {
                      this.$router.push(this.$route.query.redirect);
                    } else {
                      this.$toasted.info("Redirecting to dashboard..",{
                        icon:{
                          name:'hourglass'
                        }
                      });
                      this.$router.push("/admin");
                    }
                  } else {
                    this.$toasted.info("Subscribe to access account");
                    this.$router.push(
                      "/checkout?redirection_from=registration"
                    );
                  }
                }
              })
              .catch(error => {
              
                 this.$toasted.error("Invalid credentials",{
                      icon:{
                        name:'user-times'
                      }
                    });
                this.spin = false;
              });
          }
        })
        .catch(error => {
         
           this.$toasted.error("Invalid credentials",{
                      icon:{
                        name:'user-times'
                      }
                    });
          this.spin = false;
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form {
  width: 50%;
}
</style>