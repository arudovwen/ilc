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
        <h2 class="text-center">REGISTER</h2>
        <b-container class="bv-example-row">
          <b-form>
            <b-form-row>
              <b-col lg="6">
                <b-form-group id="input-group-1" label="School Name" label-for="input-1">
                  <b-form-input id="input-1" required placeholder></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-2" label="Email " label-for="input-2">
                  <b-form-input id="input-1" type="email" required placeholder></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col lg="6">
                <b-form-group id="input-group-3" label="Password" label-for="input-3">
                  <b-form-input id="input-3" type="password" required placeholder></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-4" label="Abbrevation" label-for="input-4">
                  <b-form-input id="input-4" required placeholder></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col lg="6">
                <b-form-group id="input-group-5" label="Phone" label-for="input-5">
                  <b-form-input id="input-5" type required placeholder></b-form-input>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group id="input-group-6" label="Address" label-for="input-6">
                  <b-form-input id="input-6" required placeholder></b-form-input>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
            >I agree to <span><a href="">terms</a> </span> and <span><a href="">condition</a></span></b-form-checkbox>
            <button class="reg-btn">REGISTER</button>
           <p class="form-txt">a tutor or student? <span><a href="">Login</a></span></p> 
          </b-form>
        </b-container>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <form @submit.prevent="register">
      <legend>Register Admin</legend>
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
  </div>-->
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
          this.$router.push("/checkout?redirection_from=registration");
        }
      });
    }
  }
};
</script>
