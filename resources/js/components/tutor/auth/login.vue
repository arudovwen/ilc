<template>
  <div class="container">
    <form @submit.prevent="submit">
      <legend>Tutor login</legend>
      <div class="form-group">
        <label for>Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          v-model="tutor.email"
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
          v-model="tutor.password"
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
      tutor: {
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
        client_id: 3,
        client_secret: "MK7qWmbsqhwtUXfr3f3OgEm0uHLw3hm3EsGycQDs",
        username: this.tutor.email,
        password: this.tutor.password,
        
      };
      const typeTutor = {};
      axios.post("/oauth/token", data).then(res => {
        if (res.status == 200) {
          typeTutor.access_token = res.data.access_token;
          typeTutor.refresh_token = res.data.refresh_token;
            axios
            .get(`/api/tutorDetails`, {
              headers: { Authorization: `Bearer ${res.data.access_token}` }
            }).then(res => {
              if (res.status === 200) {
                this.spin = false;
                 typeTutor.id = res.data.id;
                typeTutor.email = res.data.email;
                typeTutor.name = res.data.name;
                localStorage.setItem("typeTutor", JSON.stringify(typeTutor));
                this.$toasted.success("Sucessful");
                this.$router.push('/tutor')
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