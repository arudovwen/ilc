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
          v-model="data.name"
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
          v-model="data.email"
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
          v-model="data.password"
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
          v-model="data.address"
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
      data: {
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
      axios.post("/api/admin", this.data).then(res => {
        if (res.status == 201) {
          this.$toasted.info("Successful");
              this.$router.push("/admin/administrators");
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
   position: relative;
}
form{
    width:50%
}
</style>