<template>
  <div class="container">
    <b-form @submit.prevent="register">
      <legend class="text-center">Register Admin</legend>
    <b-form-group>
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
    </b-form-group>
    <b-form-group>
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
      </b-form-group>
    <b-form-group>
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
     </b-form-group>
    <b-form-group>
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
     </b-form-group>

    <b-form-group>
        <label for>Role</label>
      
         <b-form-select v-model="data.role" :options="options"></b-form-select>
     </b-form-group>

      <b-form-group>
         <b-button variant="success" type="submit">Register</b-button>
      </b-form-group>
     
    </b-form>
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
      spin: false,
      options:[
         {value:'',text:'Select an option',disabled:true},
        {value:'administrator',text:'Administrator'},
          {value:'principal',text:'Principal'},
      ]
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