<template>
  <div class="container">
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