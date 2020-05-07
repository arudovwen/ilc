<template>
  <div class="container register">
    <div class="row">
      <div class="col-md-3 register-left">
        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt />
        <h3 cl>Welcome</h3>
        <p>You are 30 seconds away from earning your own money!</p>
        <button
          v-waves.button
          v-waves.float
          class="bg-white rounded-pill sec_color"
          type="button"
          @click="register('register')"
        >Register</button>
        <br />
      </div>
      <form @submit.prevent="submit" class="col-md-9 register-right">
        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              @click="changeType('tutor')"
            >Tutor</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              @click="changeType('student')"
            >Student</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <!-- student starts here  -->
            <h3 class="register-heading">Login as a Student</h3>
            <div class="row register-form">
              <div class="col-md-6 mx-auto">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email *"
                    v-model="user.email"
                  />
                </div>
                <div class="form-group">
                  <input
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
                >Login</button>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <!-- tutor starts here  -->
            <h3 class="register-heading">Login as a Tutor</h3>
            <div class="row register-form">
              <div class="col-md-6 mx-auto">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email *"
                    v-model="user.email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password *"
                    v-model="user.email"
                  />
                </div>

                <button
                  v-waves.button
                  v-waves.float
                  v-waves.light
                  type="submit"
                  class="btnRegister"
                >Login</button>
              </div>
            </div>
          </div>

          <!-- institution  -->

          <!-- <div
            class="tab-pane fade show"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >

        
            <h3 class="register-heading">Login as a Tutor</h3>
            <div class="row register-form">
             <div class="col-md-6">
                  <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your Email *" value />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="Password *" value />
                </div>

                <button v-waves.button v-waves.float v-waves.light  type="submit" class="btnRegister"  >Login</button>
              </div>
            </div>
          </div>-->
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        type: "tutor",
        email: "",
        password: ""
      }
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
      let data = {
        grant_type:"password",
        client_id: 3,
        client_secret: "Vq7JaoAeblyt4aHnpJjw4E3YmmkkFe1Q1PnxiQY7",
        username: this.user.email,
        password: this.user.password,
        theNewProvider:'api',
        
      };

       axios.post("/oauth/token", data).then(res=>{
           axios.get(`/api/user`,{
             headers:{Authorization:`Bearer ${res.data.access_token}`}
           }).then(res=>{}).catch(error=>{
             let errors = error.response.data.errors
             console.log("submit -> errors", error)
           })
          
        })
    }
  }
};
</script>


<style scoped>
.register {
  background: transparent;
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  padding-top: 4%;
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
  width: 20%;
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
</style>