<template>
  <div class="container-fluid register">
   <form @submit.prevent="register">
      <legend>Register School</legend>
      <div class="form-group">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="admin.name"
          aria-describedby="helpId"
          placeholder="University of Example"
        />
      </div>
      <div class="form-group">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="admin.email"
          aria-describedby="helpId"
          placeholder="example@email.com"
        />
      </div>
       <div class="form-group">
        <label for>Password</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          v-model="admin.password"
          aria-describedby="helpId"
          placeholder=""
        />
      </div>
      <div class="form-group">
        <label for>Abbreviation</label>
        <input
          type="text"
          class="form-control"
          name="abbreviation"
          id="abbreviation"
          v-model="admin.abbreviation"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <div class="form-group">
        <label for>Phone</label>
        <input
          type="tel"
          class="form-control"
          name="phone"
          id="phone"
          maxlength="11"
          v-model="admin.phone"
          aria-describedby="helpId"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for>Address</label>
        <input
          type="text"
          class="form-control"
          name="address"
          id="address"
          v-model="admin.address"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <button class="button-blue" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
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
    register() {
      axios.post("/api/school-register", this.admin).then(res => {
        if (res.status == 201) {
          const regDetails = {};
          regDetails.email = res.data.email;
          regDetails.name = res.data.schools;
          regDetails.school_id = res.data.id;
          localStorage.setItem("regDetails", JSON.stringify(regDetails));
         
          this.$toasted.info("Successful");
          this.$router.push('/checkout?redirection_from=registration')
        }
      });
    },
   
  }
};
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
form{
    width:50%;
     background: #f7f8fa;
     padding: 15px;
}
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
  margin-top: 28%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f7f8fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
  width: 80%;
  height: 85%;
  padding: 0 15px;
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
    width: 35%;
  }
  .register-right {
    width: 90%;
  }
}
@media (max-width: 425px) {
  .register-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .register-right {
    width: 100%;
    height: 75vh;
    overflow: scroll;
    padding-top: 80%;
  }
  .register .nav-tabs {
    width: 60%;
    margin: 3% auto 0;
  }
  .register-left {
    padding-bottom: 20px;
  }
}
</style>