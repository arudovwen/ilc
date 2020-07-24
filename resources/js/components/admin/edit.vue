<template>
  <div class="container">
    <div class="back">
      <router-link to="/admin/administrators">Back</router-link>
    </div>
    <form @submit.prevent="register">
      <legend class="text-center">Update Admin</legend>
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

      <b-form-group>
        <label for>Role</label>
      
         <b-form-select v-model="data.role" :options="options"></b-form-select>
     </b-form-group>


      <b-form-group>
         <b-button variant="success" type="submit">Register</b-button>
      </b-form-group>
    </form>
  </div>
</template>


<script>
export default {
  props: ["admin"],
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
  mounted() {
    this.getAdmin();
  },
  methods: {
    register() {
      axios.put(`/api/admin/${this.$route.params.id}`, this.admin).then(res => {
        if (res.status == 200) {
          this.$toasted.info("Successful");
          this.$router.push("/admin/administrators");
        }
      });
    },
    getAdmin() {
      axios
        .get(`/api/admin/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.$props.admin.access_token}`
          }
        })
        .then(res => {
          if (res.status == 200) {
            this.data = res.data;
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
form {
  width: 50%;
}
</style>