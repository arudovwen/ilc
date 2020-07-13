<template>
  <div class="container">
    <form @submit.prevent="submit">
      <legend>Admin login</legend>
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
        <label for>Pasword</label>
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

      <button class="button-blue" type="submit">Submit</button>
    </form>
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
                    typeAdmin.name = res.data.name;
                    typeAdmin.school_id = res.data.school_id;
                    typeAdmin.school = res.data.school;
                    localStorage.setItem(
                      "typeAdmin",
                      JSON.stringify(typeAdmin)
                    );
                    this.$toasted.success("Sucessful");
                    if (this.$route.query.redirect) {
                      this.$router.push(this.$route.query.redirect);
                    } else {
                      this.$toasted.info("Redirecting to dashboard..");
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
                console.log("submit -> error", error);
                this.$toasted.error("Something is not right");
                this.spin = false;
              });
          }
        })
        .catch(error => {
          console.log("submit -> error", error);
          this.$toasted.error("Something is not right");
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