<template>
  <div class="container">
    <form @submit.prevent="submit">
      <legend>Student login</legend>
      <div class="form-group">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="student.email"
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
          v-model="student.password"
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
      student: {
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
        client_id: 2,
        client_secret: "n9ulVAPzvxunsM8fA0hr0d2ZPOzwPzUIH5JtceVW",
        username: this.student.email,
        password: this.student.password,
        
      };
      const typeStudent = {};
      axios.post("/oauth/token", data).then(res => {
        if (res.status == 200) {
          typeStudent.access_token = res.data.access_token;
          typeStudent.refresh_token = res.data.refresh_token;
            axios
            .get(`/api/user`, {
              headers: { Authorization: `Bearer ${res.data.access_token}` }
            }).then(res => {
              if (res.status === 200) {
                this.spin = false;
                typeStudent.email = res.data.email;
                typeStudent.name = res.data.name;
                localStorage.setItem("typeStudent", JSON.stringify(typeStudent));
                this.$toasted.success("Sucessful");
                this.$router.push('/student')
              }
            }).catch(error => {
            console.log("submit -> error", error)
              this.$toasted.error("Something is not right");
              this.spin = false;
            });
        }
      }).catch(error => {
            console.log("submit -> error", error)
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