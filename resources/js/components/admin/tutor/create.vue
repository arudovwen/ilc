<template>
  <div class="container">
    <form @submit.prevent="register">
      <legend class="text-center">Register Tutor</legend>
      <div class="form-group">
        <label for>Name</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          v-model="tutor.name"
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
          v-model="tutor.email"
          aria-describedby="helpId"
          placeholder="example@email.com"
        />
      </div>

     <b-form-group>
        <label for>Gender</label>
      
         <b-form-select v-model="tutor.gender" :options="options"></b-form-select>
     </b-form-group>

      <div class="form-group">
        <label for>Subject</label>
        <input
          type="text"
          class="form-control"
          v-model="tutor.subject"
          aria-describedby="helpId"
          placeholder="e.g English language"
        />
      </div>

      <b-form-group>
        <b-button type="submit">Register</b-button>
      </b-form-group>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tutor: {
        name: "",
        email: "",
        gender: "",
        subjects: ""
      },
        options:[
         {value:'',text:'Select an option',disabled:true},
        {value:'male',text:'Male'},
          {value:'female',text:'Female'},
      ],

      spin: false
    };
  },
  methods: {
    register() {
      let admin = JSON.parse(localStorage.getItem("typeAdmin"));
      axios
        .post("/api/tutor", this.tutor, {
          headers: {
            Authorization: `Bearer ${admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 201) {
            this.$toasted.info("Successful");
            this.$router.push("/admin/tutors");
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