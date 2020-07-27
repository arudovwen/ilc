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
          placeholder="John Doe"
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
          name="pasword"
          id="password"
          v-model="admin.password"
          aria-describedby="helpId"
          placeholder="******"
        />
      </div>
      <div class="form-group">
        <label for>Address</label>
        <input
          type="address"
          class="form-control"
          name="address"
          id="address"
          v-model="admin.address"
          aria-describedby="helpId"
          placeholder
        />
      </div>

      <div class="form-group">
        <label for>Role</label>
        <select class="form-control" name id>
          <option value="administrator">Administrator</option>
          <option value="principal">Principal</option>
        </select>
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
        email: "",
        password: "",
        address: "",
        role: ""
      },
      spin: false
    };
  },
  methods: {
    register() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      console.log("register -> admin", admin)
      axios
        .post("/api/admin",this.admin, {
          headers: { Authorization: `Bearer ${admin.access_token}` }
        })
        .then(res => {
          if (res.status == 201) {
            this.$toasted.info("Successful");
            this.$router.push("/admin");
          }
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