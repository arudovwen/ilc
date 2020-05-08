<template>
  <div class="container register">
    <form @submit.prevent="submit" class="col-md-9 register-right">
      <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li @click="changeType('student')" class="nav-item">
          <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home">Student</a>
        </li>
        <li @click="changeType('tutor')" class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >Tutor</a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          v-if="user.type =='student'"
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <!-- student starts here  -->
          <h4 class="register-heading">Login as a Student</h4>
          <div class="row register-form">
            <div class="col-md-9 mx-auto">
              <div class="form-group">
                <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  v-model="user.email"
                />
              </div>
              <div class="form-group">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  v-model="user.password"
                />
              </div>

              <button
                v-waves.button
                v-waves.float
                v-waves.light
                type="submit"
                class="btnRegister"
              ><span v-if="spin" class="spinner-border spinner-border-sm"></span> Login</button>
            </div>
          </div>
        </div>
        <div
          v-if="user.type =='tutor'"
          class="tab-pane fade show"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <!-- tutor starts here  -->
          <h4 class="register-heading">Login as a Tutor</h4>
          <div class="row register-form">
            <div class="col-md-6 mx-auto">
              <div class="form-group">
                <input
                  required
                  type="email"
                  class="form-control"
                  placeholder="Your Email *"
                  v-model="user.email"
                />
              </div>
              <div class="form-group">
                <input
                  required
                  type="password"
                  class="form-control"
                  placeholder="Password *"
                  v-model="user.password"
                />
              </div>

              <button
                v-waves.button
                v-waves.float
                v-waves.light
                type="submit"
                class="btnRegister"
              ><span v-if="spin" class="spinner-border spinner-border-sm"></span> Login  </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        type: "student",
        email: "",
        password: "",
        
      },
      spin:false
    };
  },
  methods: {
    register(value) {
      this.$emit("register", value);
    },
    changeType(value) {
      this.user.type = value;
    },
    submit() {
      this.spin = true
      let data = {
        grant_type: "password",
        client_id: 2,
        client_secret: "pYVE8LflkBQWKSpKaKYLcCYPnPU7S2sWqJyaSMJ3",
        username: this.user.email,
        password: this.user.password,
        theNewProvider: "api"
      };
      const myUser = {};

      if (this.user.type == "student") {
        axios.post("/oauth/token", data).then(res => {
          myUser.access_token = res.data.access_token;
          axios
            .get(`/api/user`, {
              headers: { Authorization: `Bearer ${res.data.access_token}` }
            })
            .then(res => {
              if (res.status === 200) {
                let bizUser = {}
                bizUser = res.data
                  localStorage.setItem("bizUser", JSON.stringify(bizUser));
                this.spin=false
                myUser.email = this.user.email;
                myUser.name = res.data.name;
                localStorage.setItem("myUser", JSON.stringify(myUser));
                this.$toasted.success("Sucessful");
                if (this.$route.query.redirect_from == "register") {
                    this.$router.push("/?show=popup");
                } else { 
                  this.$router.push("/");
                }
              }
            })
            .catch(error => {
               this.$toasted.error("Something is not right");
              let errors = error.response.data.errors;
              this.spin=false
            });
        }).catch(err=>{
          this.spin = false
           this.$toasted.error("Something is not right");
        });
      } else {
      }
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
.register {
  background: transparent;
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  padding-top: 4%;
  width: 30%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f7f8fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f7f8fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  width: 80%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 4%;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: repeating-linear-gradient(
    to right,
    rgb(15, 122, 138, 0.7) 0%,
    rgb(15, 122, 138, 0.7) 100%
  );
  border-radius: 1.5rem;
  width: 28%;
  float: right;
  font-size: 14px;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  font-size: 14px;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #5fa1ac;
  border: 2px solid #5fa1ac;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
@media (max-width: 1024px) {
  .register .nav-tabs {
    width: 35%;
  }
  h4.register-heading {
    font-size: 22px;
  }
  .register-form {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .register .nav-tabs {
    width: 40%;
  }
}
@media (max-width: 425px) {
  .register-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .register .nav-tabs {
    width: 80%;
    margin: 3% auto 0;
  }
  .register-left {
    padding-bottom: 20px;
  }
}
</style>